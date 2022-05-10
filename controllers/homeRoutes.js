const router = require('express').Router();


//render static homepage
router.get('/', (req, res) => {
 res.render('homepage');
});


module.exports = router;