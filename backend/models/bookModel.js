const fs = require('fs');
const path = './db/book.json';

function readBooksFromFile(callback) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) return callback(err);
    try {
      const books = JSON.parse(data);
      callback(null, books);
    } catch (parseErr) {
      callback(parseErr);
    }
  });
}

function writeBooksToFile(books, callback) {
  fs.writeFile(path, JSON.stringify(books, null, 2), 'utf-8', callback);
}

module.exports = {
  readBooksFromFile,
  writeBooksToFile
};
