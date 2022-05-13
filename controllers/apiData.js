
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
  
  module.exports = router;

