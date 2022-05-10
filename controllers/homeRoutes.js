const router = require('express').Router();
const withAuth = require('../utils/auth');

//render static homepage
router.get('/', (req, res) => {
 res.render('homepage');
});


//take user to login handlebars when user hit the /login route
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;