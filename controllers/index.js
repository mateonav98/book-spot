const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const bookRoutes = require('./apiData');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/books', bookRoutes);

module.exports = router;
