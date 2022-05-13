// getting result of a single book
const getSingleBook = (event) => {
    event.preventDefault();

    // when calling topbar.show() it broke the function;

    location.href = '/api/books/result?bookid=' + event.target.id;
  };
  
const images = document.querySelectorAll("img");
for (const image of images) {
    image.addEventListener('click', getSingleBook);
}

