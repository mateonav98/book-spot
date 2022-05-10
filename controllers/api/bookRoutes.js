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

module.exports = router;