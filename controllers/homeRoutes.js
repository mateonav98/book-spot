const router = require('express').Router();
const { Review, Book, User } = require('../models');
const withAuth = require('../utils/auth');

//render static homepage
router.get('/', (req, res) => {
 res.render('homepage',{
    logged_in: req.session.logged_in 
 });
});


//take user to login handlebars when user hit the /login route
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req,res) =>{
    if(req.session.logged_in){
        res.redirect('/profile');
    }
    res.render('login')
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Book }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;