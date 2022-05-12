
async function saveBook(event){
    event.preventDefault();
    const title = document.getElementById('title')
    const titleT = title.textContent
    const author= document.getElementById('author')
    const authorT = author.textContent
    const description = document.getElementById('description')
    const desT = description.textContent
    const image = document.getElementById('hide')
    const imLink = image.textContent
    console.log(desT);
    const response = await fetch(`/api/books`, {
        method: 'POST',
        body: JSON.stringify({title:titleT,author:authorT,image:imLink}),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if(response.ok){
        document.location.replace('/profile')
        
    }else{
        alert('error posting, please try again later')
    }
}

document
.querySelector('#saveBtn')
.addEventListener('click', saveBook);