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

// get single route by id
router.get('/:id', async (req,res) =>{
    try{
        const reviewById = await Review.findByPk(req.params.id,{
            include: [{model: Book},{model:User}]
        })
        const review = reviewById.get({plain: true});
        res.status(200).json(review);
    }catch(err){
        res.status(400).json(err)
    }
})

//update single review
router.put('/:id', async (req,res) =>{
    try {
        const updateReview = Review.update(req.body, {
            where: {
                id: req.params.id,
            }
        });

        res.status(200).json(updateReview)
    }catch(err) {
        res.status(400).json(err);
    }
})

//create a review
router.post('/', async (req,res) =>{
    try{
        const createReview = await Review.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(createReview)
        
    }catch(err){
        res.status(400).json(err);
    }
})

//delete a review
router.delete('/:id', async (req,res) =>{
    try{
        const reviewDel = await Review.destroy({
            where: {
                id: req.params.id,
                user_id:req.session.user_id
            }
        })
        if(!reviewDel){
            res.status(404).json({ message:'error'});
            return;
        }
    }catch(err){
        res.status(500).json(err);
    }
} )

module.exports = router;