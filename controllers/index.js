const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const dataRoutes = require('./apiData.js')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/data', dataRoutes);

module.exports = router;
