const getData = (event) => {
    event.preventDefault();
    const search = document.querySelector('#searchText').value.trim();
    location.href = '/api/books?searchTerm=' + search;

};

document
.querySelector('.btn')
.addEventListener('click', getData);

