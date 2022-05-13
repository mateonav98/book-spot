// const reviewBtn = document.querySelector('#reviewBtn');

//hiding review box and displaying once clicked
async function showComment(event){
    event.preventDefault();
    let info = event.target;
    const parent = await info.parentNode.parentNode.parentNode;
    const variableForm = await parent.querySelector('#commentForm') 
    console.log(variableForm)
    if (variableForm.style.display === "none") {
        variableForm.style.display = "block";
    } else {
        variableForm.style.display = "none";
    }
}

document.querySelectorAll('#reviewBtn').forEach(e => e.addEventListener('click', showComment));


// creating new post to book
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
    return document.querySelector('#displayText').innerHTML = text;
};

document
.querySelector('#submitReview')
.addEventListener('click', addReview);

function upvote(){
    
}
function downvote(){

}

document.querySelectorAll('#submitReview').forEach(e => e.addEventListener('click', addReview));


