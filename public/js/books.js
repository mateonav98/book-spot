const getData = (event) => {
    event.preventDefault();
    const search = document.querySelector('#searchText').value.trim();
    location.href = '/api/books?searchTerm=' + search;

};

// async function getData(event){
//     event.preventDefault();
//     let info = event.target;
//     const parent = await info.parentNode.parentNode;
//     console.log(parent)
// }

document
.querySelector('.btn')
.addEventListener('click', getData);

