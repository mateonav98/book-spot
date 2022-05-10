const  router  = require("express").Router();
const {Book, Review} = require('../../models');

// router to get all saved books 
router.get('/', async (req,res) =>{
    try{
        const bookData = await Book.findAll({
            include: [{model: Review}]
        })
        const book = bookData.map((data) => data.get({plain:true}));
        res.status(200).json(book);
    }catch(err){
        res.status(500).json(err)
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

module.exports = router;