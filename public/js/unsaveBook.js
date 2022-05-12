const unsaveBook = async (event) => {
    event.preventDefaul();
    let info = await event.target;
    const id = await info.getAttribute('data');
    const response = await fetch('/api/reviews/' , {
        method: 'POST', 
        body: JSON.stringify({book_id: id}),
        headers: {'Content-Type': 'application/json'},
    });
    console.log(response)
    if (response.ok) {
        document.location.reload();
        console.log('UNSAVED SUCCESSFUL')
    } else {
        alert('UNABLE TO UNSAVE BOOK')
    };
}

document
.querySelector('#unsaveBtn')
.addEventListener('click', unsaveBook);