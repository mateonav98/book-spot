const getSingleBook = (event) => {
    event.preventDefault();
    topbar.show();
    location.href = '/api/books/result?bookid=' + event.target.id;
  };
  
const images = document.querySelectorAll("img");
for (const image of images) {
    image.addEventListener('click', getSingleBook);
}

