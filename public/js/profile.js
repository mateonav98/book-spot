// unsaving a book
const unsaveBook = async (event) => {
    event.preventDefault();
    topbar.show();
    let info = await event.target;
    const id = await info.getAttribute('data');
    const response = await fetch(`/api/books/${id}`, {
        method: 'DELETE', 
    });
    console.log(response)
    if (response.ok) {
        document.location.reload(true);
        console.log('UNSAVED SUCCESSFUL')
    } else {
        alert('UNSAVE NOT SUCCESSFUL')
    };
}
document.querySelectorAll('#unsaveBtn').forEach(e => e.addEventListener('click', unsaveBook));

//hiding review box and displaying once button is clicked
async function showComment(event){
    event.preventDefault();
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

// upvoting 
async function upvote(event){
        event.preventDefault();
        const btn = event.target;
        const id = await btn.getAttribute('data');
        const vote = await btn.getAttribute('data-value');
        const newVote = parseInt(vote,10)+1
        // console.log(vote)
        // console.log(id)
        const response = await fetch(`/api/books/${id}`, {
            method: 'PUT',
            body: JSON.stringify({upvote: newVote}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response)
        if(response.ok){
            document.location.replace('/profile')
        }else{
            alert('error posting, please try again later')
        }
}
document.querySelectorAll('#upvote').forEach(e => e.addEventListener('click', upvote));
async function downvote(event){
    event.preventDefault();
    const btn = event.target;
    const id = await btn.getAttribute('data');
    const vote = await btn.getAttribute('data-value');
    const newVote = parseInt(vote,10)+1
    // console.log(vote)
    // console.log(id)
    const response = await fetch(`/api/books/${id}`, {
        method: 'PUT',
        body: JSON.stringify({downvote: newVote}),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(response)
    if(response.ok){
        document.location.replace('/profile')
    }else{
        alert('error posting, please try again later')
    }
}
document.querySelectorAll('#downvote').forEach(e => e.addEventListener('click', downvote));

// showing edit text bar when clicking the edit button
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
        document.location.reload(true);
        console.log('DELETE SUCCESSFUL')
    } else {
        alert('DELETE NOT SUCCESSFUL')
    };
}

document.querySelectorAll('#delBtn').forEach(e => e.addEventListener('click', deleteReview));