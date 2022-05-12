const fetch = require("node-fetch");
const  router  = require("express").Router();
const {Book, Review} = require('../../models');

// router to get all saved books 
router.get('/', async (req,res) =>{
    try{
        const searchTerm = req.query.searchTerm;
        
        console.log(req.query.searchTerm);

        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchTerm);  
        console.log(response); 
        const data = await response.json();
        console.log('here at the book routes')
        console.log(data.items);
        res.render('books', {books: data.items});

    }catch(err){
        console.error(err);
        res.status(500).json(err)
    }
})


router.get('/result', async (req,res) =>{
    try{
        const bookid = req.query.bookid
        const response = await fetch('https://www.googleapis.com/books/v1/volumes/' + bookid); 
        const data = await response.json();
        res.render('single-book', {book: data})
    }catch(err){
        console.error('got error');
        console.error(err);
        res.status(400).json(err)
    }
})

router.get('/:id', async (req,res) =>{
    try{
        const bookData = await Book.findByPk(req.params.id,{
            include: [{model:Review }]
        })
        const bookId = bookData.get({plain:true});
        res.status(200).json(bookId);
    }catch(err){
        res.status(400).json(err)
    }
})



router.post('/', async (req,res) =>{
    //example of test
    // {
    //     "title":"new book",
    //     "author": "richard",
    //     "description": "good book",
    //     "user_id": 1 
    // }
    try{
        const createBook = await Book.create({
            ...req.body,
            //grabs user id number
            user_id: req.session.user_id,
        });
        res.status(200).json(createBook)
    }catch(err){
        res.status(400).json(err);
    }
})

router.put('/:id', async (req,res) => {
    //comment out user_id to test
    // {
    //     "id":"4",
    //     "title":"new book",
    //     "author": "new author",
    //     "description": "very good book",
    //     "user_id":1
    // }
    try {
        const updateBook = Book.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });

        res.status(200).json(updateBook)
    }catch(err) {
        res.status(400).json(err);
    }
});


router.delete('/:id', async (req,res) =>{
    try{
        const bookDel = await Book.destroy({
            where: {
                id: req.params.id,
                user_id:req.session.user_id
            }
        })
        if(!bookDel){
            res.status(404).json({ message:'error'});
            return;
        }
    }catch(err){
        res.status(500).json(err);
    }
} )

module.exports = router;