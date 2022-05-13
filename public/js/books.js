//get book data
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
document
.querySelector('.btn')
.addEventListener('click', getData);

