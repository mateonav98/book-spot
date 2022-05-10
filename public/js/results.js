const fetch = require('node-fetch');

function fetchData() {
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=circe";
    fetch(bookUrl)
    .then(function(res) {
        return res.json();
      })
      .then(function(result) {
        title = result.items[0].volumeInfo.title;
        description = result.items[0].volumeInfo.description;
        authors = result.items[0].volumeInfo.authors
        imageLinks = result.items[0].volumeInfo.imageLinks
        console.log(title);
        console.log(description);
        console.log(authors)
        console.log(imageLinks);
      }),
      function(error) {
        console.log(error);
      }
    }
fetchData()

