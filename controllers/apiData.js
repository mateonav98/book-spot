
const router = require('express').Router();
const fetch = require('node-fetch');

  router.post("/" , (req, res) => {
    console.log(req.body)
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + req.body).then(
      async (response) => {
        const data = await response.json();
        const title = data.items[0].volumeInfo.title;
        const description = data.items[0].volumeInfo.description;
        const authors = data.items[0].volumeInfo.authors
        const imageLinks = data.items[0].volumeInfo.imageLinks
        res.status(200).send(JSON.stringify(data));
        // res.render('/login')
        
        console.log(title)
        console.log(description)
        console.log(authors)
        console.log(imageLinks)
        
      }
    )}
  );

//   const getData = (event) => {
//     event.preventDefault();
//     const search = document.querySelector('#searchText').value.trim();
//     fetch('https://www.googleapis.com/books/v1/volumes?q=' + search)
//     .then(function (response) {
//       //We write the remainder of the fetch() request, as follows:
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
  

// };

// document
// .querySelector('.form')
// .addEventListener('click', getData);


  module.exports = router;

