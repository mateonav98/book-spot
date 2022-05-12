const unsaveBook = async (event) => {
    event.preventDefault();
    let info = await event.target;
    const id = await info.getAttribute('data');
    const response = await fetch('/api/books/' + 1, {
        method: 'DELETE', 
        body: JSON.stringify({book_id: id}),
        headers: {'Content-Type': 'application/json'},
    });
    console.log(response)
    if (response.ok) {
        document.location.reload();
        console.log('UNSAVED SUCCESSFUL')
    } else {
        alert('UNSAVE NOT SUCCESSFUL')
    };
}

document
.querySelector('#unsaveBtn')
.addEventListener('click', unsaveBook);