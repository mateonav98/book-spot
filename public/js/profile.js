// const showReview = (event) => {
//     event.preventDefault();

//   };

// const reviewBox = document.querySelector('#reviewBox');
const reviewBtn = document.querySelector('#reviewBtn');
// function showReview() {
//     reviewBox.classList.remove('hidden')
// }


async function showComment(event){
    event.preventDefault();
    // let info = event.target;
    // const parent = await info.parentNode;
    // const form = await parent.querySelector('form') 
    const variableForm = document.getElementById('commentForm')
    console.log(variableForm)
    if (variableForm.style.display === "none") {
        variableForm.style.display = "block";
    } else {
        variableForm.style.display = "none";
    }
}

reviewBtn.addEventListener('click', showComment)