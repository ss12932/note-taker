const { Router } = require('express');

const api = require('./api');
const views = require('./views');

const router = Router();

router.use('/api/notes', api);
router.use('/', views);

module.exports = router;
