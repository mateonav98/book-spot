
const router = require('express').Router();
const fetch = require('node-fetch');

  router.get("/", (req, res) => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=romance").then(
      async (response) => {
        const data = await response.json();
        res.status(200).send(JSON.stringify(data));
      }
    );
  });


  module.exports = router;

