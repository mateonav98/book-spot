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