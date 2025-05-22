const fetch = require('node-fetch'); // for Node <18
const { readBooksFromFile, writeBooksToFile } = require('../models/bookModel');

const url = "https://openlibrary.org/search.json?q=the&page=1";

function fetchAndStoreBooks() {
  const controller = new AbortController();
  const timeout = 15000;

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  fetch(url, { signal: controller.signal })
    .then(response => {
      clearTimeout(timeoutId);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      const newBooks = data.docs;

      readBooksFromFile((err, existingBooks) => {
        if (err) {
          console.error('Error reading books:', err);
          return;
        }

        const allBooks = existingBooks.concat(newBooks);

        writeBooksToFile(allBooks, (err) => {
          if (err) console.error('Error writing books:', err);
          else console.log('Books updated successfully!');
        });
      });
    })
    .catch(error => {
      if (error.name === 'AbortError') {
        console.error('Fetch aborted due to timeout');
      } else {
        console.error('Fetch error:', error);
      }
    });
}

module.exports = {
  fetchAndStoreBooks
};
