const getSingleBook = (event) => {
    event.preventDefault();
    location.href = '/api/books/result?bookid=' + event.target.id;
  };
  
const images = document.querySelectorAll("img");
console.log('a');

for (const image of images) {
    image.addEventListener('click', getSingleBook);
}