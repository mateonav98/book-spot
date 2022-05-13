// const reviewBtn = document.querySelector('#reviewBtn');

//hiding review box and displaying once clicked
async function showComment(event){
    event.preventDefault();
    topbar.show();
    let info = event.target;
    const parent = await info.parentNode.parentNode;
    console.log(parent)
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
    topbar.show();
    let info = await event.target;
    const parent = info.parentNode
    const text = parent.querySelector('#reviewText').value.trim();
    const id = await info.getAttribute('data');
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

async function upvote(event){
        event.preventDefault();
        const btn = event.target;
        const id = await btn.getAttribute('data');
        const vote = await btn.getAttribute('data-value');
        const newVote = parseInt(vote,10)+1
        console.log(vote)
        console.log(id)
        const response = await fetch(`/api/books/${id}`, {
            method: 'PUT',
            body: JSON.stringify({upvote: newVote}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response)
        if(response.ok){
            //document.location.replace('/profile')
            
        }else{
            alert('error posting, please try again later')
        }
}
document.querySelectorAll('#upvote').forEach(e => e.addEventListener('click', upvote));
function downvote(){

}
document.querySelectorAll('#downvote').forEach(e => e.addEventListener('click', downvote));

document.querySelectorAll('#submitReview').forEach(e => e.addEventListener('click', addReview));


