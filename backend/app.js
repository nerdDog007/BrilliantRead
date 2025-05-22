const fetch = require('node-fetch'); // if you don't have fetch natively (Node <18)
const fs = require('fs')
// // // 7049
const url = "https://openlibrary.org/search.json?q=the&page=6";

const controller = new AbortController();
const timeout = 150000; // 15 seconds timeout

// Set a timer that aborts the request after 15 seconds
const timeoutId = setTimeout(() => {
  controller.abort();
}, timeout);

fetch(url, { signal: controller.signal })
  .then(response => {
    clearTimeout(timeoutId); // clear timeout if request completes in time
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const dataDocs = data.docs
    fs.readFile('./db/book.json','utf-8',(err,da)=>{
        if(da)
        {
        da = JSON.parse(da)
        const concat = da.concat(dataDocs)
        const concatF = JSON.stringify(concat,null,2)
        fs.writeFile('./db/book.json',concatF,(err,da)=>{
        console.log(da)
        })
        }
        else 
        {
            console.log("this")
            const form = JSON.stringify(dataDocs,null,2)
            fs.writeFile('./db/book.json',form,(er,da)=>{
                console.log(da)
            })
        }

    })
  })
  .catch(error => {
    if (error.name === 'AbortError') {
      console.error('Fetch aborted due to timeout');
    } else {
      console.error('Fetch error:', error);
    }
})


