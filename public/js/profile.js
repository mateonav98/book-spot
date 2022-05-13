// const reviewBtn = document.querySelector('#reviewBtn');

//hiding review box and displaying once clicked
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

document.querySelectorAll('#reviewBtn').forEach(e => e.addEventListener('click', showComment));


// creating new post to book
const addReview = async (event) => {
    event.preventDefault();
    let info = await event.target;
    const id = await info.getAttribute('data');
    const text = await document.querySelector('#reviewText').value.trim();
    if (text) {
        const response = await fetch(`/api/reviews/${id}`, {
            method: 'POST',
            body: JSON.stringify({review: text, book_id: id}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.reload();
            console.log('SUCCESSFUL')
        } else {
            alert('Unable to post')
        };
    }
    return document.querySelector('#displayText').innerHTML = text;
};


document.querySelectorAll('#submitReview').forEach(e => e.addEventListener('click', addReview));


// updating post to book
const updateReview= async (event) => {
    event.preventDefault();
    let info = await event.target;
    const id = await info.getAttribute('data');
    console.log(id)
    const text = await document.querySelector('#reviewText').value.trim();
    // if (text) {
    //     const response = await fetch(`/api/reviews/${id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({review: text}),
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    //     if (response.ok) {
    //         // document.location.reload();
    //         console.log('SUCCESSFUL')
    //     } else {
    //         alert('Unable to post')
    //     };
    // }
    return document.querySelector('#displayText').innerHTML = text;
};

document.querySelectorAll('#updateBtn').forEach(e => e.addEventListener('click', updateReview));


// deleting review
// const deleteReview = async (event) => {
//     event.preventDefault();
//     let info = await event.target;
//     const id = await info.getAttribute('data');
//     const text = await document.querySelector('#updateText').value.trim();
//     if(text) {
//         const response = await fetch(`/api/reviews/${id}`, {
//             method: 'DELETE', 
//         });
//         console.log(response)
//         if (response.ok) {
//             document.location.reload();
//             console.log('DELETE SUCCESSFUL')
//         } else {
//             alert('DELETE NOT SUCCESSFUL')
//         };
//     }
// }
// document.querySelectorAll('#deleteBtn').forEach(e => e.addEventListener('click', deleteReview));

// document
// .querySelector('#unsaveBtn')
// .addEventListener('click', unsaveBook);



