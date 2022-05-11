const  router  = require("express").Router();
const {Review, User, Book} = require('../../models');

// get route to grab review data and correlating book and user data
router.get('/', async (req,res)=>{
    try{
        const reviewData = await Review.findAll({
            include: [{model: Book},{model:User}]
        })
        const review = reviewData.map((data) => data.get({plain:true}));
        res.status(200).json(review);
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;