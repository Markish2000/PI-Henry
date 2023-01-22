const { Router } = require('express');
const gamesRouter = require('../routes/gamesRouter');

const router = Router();

router.use('/games', gamesRouter);
router.use('/genres', gamesRouter);

module.exports = router;
