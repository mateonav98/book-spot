
const getData = async (event) => {
    event.preventDefault();
    const search = document.querySelector('#searchText').value.trim();
    console.log(search)
    if (search) {
    //     const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=', {
    //         method: 'POST',
    //         body: JSON.stringify({search}),
    //         headers: {
    //             'Content-Type': 'application/json',
    // }, 
     const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + search, {
         method: 'POST',
         body: JSON.stringify({search}),
            headers: {
                'Content-Type': 'application/json',
            }
     });
     console.log(response.json());
        // const data = response.json();
        // const title = data.items[0].volumeInfo.title;
        // const description = data.items[0].volumeInfo.description;
        // const authors = data.items[0].volumeInfo.authors
        // const imageLinks = data.items[0].volumeInfo.imageLinks
        res.status(200).send(JSON.stringify(data));
        // res.render('/login')
        
        // console.log(title)
        // console.log(description)
        // console.log(authors)
        // console.log(imageLinks)
        if (response.ok) {
            document.location.replace('/login');
            console.log(response)
            } else {
            alert('Search Failed');
            }

    }

};

document
.querySelector('.form')
.addEventListener('click', getData);

// const getData = (event) => {
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
