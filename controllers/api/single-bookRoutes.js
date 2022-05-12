const fetch = require("node-fetch");
const  router  = require("express").Router();

router.get('/', async (req,res) =>{
    try{
        // const bookData = await Book.findAll({
        //     include: [{model: Review}]
        // })
        // const book = bookData.map((data) => data.get({plain:true}));

        const searchTerm = req.query.searchTerm;
        // console.log(req);
        console.log(req.query.searchTerm);

        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchTerm);  
        console.log(response); 
        const data = await response.json();
        console.log(data)
        console.log('here at the book routes')
        res.render('single-book', {books: data.items});
        


    }catch(err){
        console.error(err);
        res.status(500).json(err)
    }
})






module.exports = router;