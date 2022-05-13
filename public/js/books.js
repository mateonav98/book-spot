const getData = (event) => {
    event.preventDefault();
 
    topbar.config({
    //     autoRun      : false, 
        barThickness : 5,
        // shadowBlur   : 5,
    //     shadowColor  : 'rgba(0, 0, 0, .5)',
    //     className    : 'topbar',
      })

      topbar.show();

    //   (function step() {
    //     setTimeout(function() {  
    //       if (topbar.progress('+.01') < 1) step()
    //     }, 16)
    //   })()

    const search = document.querySelector('#searchText').value.trim();
    location.href = '/api/books?searchTerm=' + search;

};

// async function getData(event){
//     event.preventDefault();
//     let info = event.target;
//     const parent = await info.parentNode.parentNode;
//     console.log(parent)
// }

document
.querySelector('.btn')
.addEventListener('click', getData);

