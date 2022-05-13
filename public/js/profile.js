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
    const parent = info.parentNode
    const text = parent.querySelector('#reviewText').value.trim();
    const id = await info.getAttribute('data');
    if (text) {
        const response = await fetch(`/api/reviews/`, {
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


document.querySelectorAll('#submitReview').forEach(e => e.addEventListener('click', addReview));

// document
// .querySelector('#submitReview')
// .addEventListener('click', addReview);

function upvote(){
    
}
function downvote(){

}


async function showUpdate(event){
    event.preventDefault();
    let info = event.target;
    const parent = await info.parentNode;
    const variableForm = await parent.querySelector('#updateForm') 
    console.log(parent)
    console.log(variableForm)
    if (variableForm.style.display === "none") {
        variableForm.style.display = "block";
    } else {
        variableForm.style.display = "none";
    }
}

document.querySelectorAll('#editBtn').forEach(e => e.addEventListener('click', showUpdate));

// updating post to book
const updateReview = async (event) => {
    event.preventDefault();
    let info = await event.target;
    const id = await info.getAttribute('data');
    const text = await info.parentNode.querySelector('#updateText').value.trim();
    console.log(id)
    if (text) {
        const response = await fetch(`/api/reviews/${id}`, {
            method: 'PUT',
            body: JSON.stringify({review: text}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Unable to post')
        };
    }
    return document.querySelector('#displayText').innerHTML = text;
};

document.querySelectorAll('#postUpdate').forEach(e => e.addEventListener('click', updateReview));


// deleting review
const deleteReview = async (event) => {
    event.preventDefault();
    let info = await event.target;
    const id = await info.getAttribute('data');
    const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE', 
    });
    console.log(response)
    if (response.ok) {
        document.location.reload();
        console.log('DELETE SUCCESSFUL')
    } else {
        alert('DELETE NOT SUCCESSFUL')
    };
}

document.querySelectorAll('#delBtn').forEach(e => e.addEventListener('click', deleteReview));