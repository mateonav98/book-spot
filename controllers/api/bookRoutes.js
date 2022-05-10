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


module.exports = router;