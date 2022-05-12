const getSingleBook = (event) => {
    event.preventDefault();
    location.href = '/api/books/result?bookid=' + event.target.id;
  };
  
const images = document.querySelectorAll("img");
console.log('a');

for (const image of images) {
    image.addEventListener('click', getSingleBook);
}

const commentHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector('#reviewText').value.trim();
  if (text) {
      const response = await fetch('/api/reviews', {
          method: 'POST',
          body: JSON.stringify({review: text}),
          headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
      if (response.ok) {
          // document.location.reload();
          console.log('SUCCESSFUL')
      } else {
          alert('Unable to post')
      };
  }

};

document
  .querySelector('#reviewBtn')
  .addEventListener('submit', commentHandler);