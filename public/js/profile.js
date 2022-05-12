const reviewBtn = document.querySelector('#reviewBtn');

async function showComment(event){
    event.preventDefault();

    const variableForm = document.getElementById('commentForm')
    console.log(variableForm)
    if (variableForm.style.display === "none") {
        variableForm.style.display = "block";
    } else {
        variableForm.style.display = "none";
    }
}

reviewBtn.addEventListener('click', showComment)

// async function addReview(event){
//     event.preventDefault()
//     let info = await event.target;
//     const id = await info.getAttribute('data');
//     const text = await document.getElementById('reviewText').value.trim()
//     console.log(text)
//     console.log(id)
//     const response = await fetch('/api/reviews', {
//         method: 'POST',
//         body: JSON.stringify({review: text}),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
//     if(response.ok){
//         // document.location.reload()
//     }else{
//         alert('error posting, please try again later')
//     }
// }

const addReview = async (event) => {
    event.preventDefault();
    let info = await event.target;
    const id = await info.getAttribute('data');
    const text = await document.querySelector('#reviewText').value.trim();
    if (text) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({review: text, book_id: id}),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.ok) {
            document.location.reload();
            console.log('SUCCESSFUL')
        } else {
            alert('Unable to post')
        };
    }
};

document
.querySelector('#submitReview')
.addEventListener('click', addReview);

function upvote(){
    
}
function downvote(){

}