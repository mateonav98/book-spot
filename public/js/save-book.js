const saveBook = async () => {
    const response = await fetch('/api/books', {
        method: 'POST',
        body: JSON.stringify({book_id: book.id,}),
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

document
.querySelector('saveBtn')
.addEventListener('click', saveBook);

