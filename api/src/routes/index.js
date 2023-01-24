const { Router } = require('express');
const gamesRouter = require('./gamesRouter');
const genresRouter = require('./genresRouter');
const platformsRouter = require('./platformsRouter');

const router = Router();

router.use('/games', gamesRouter);
router.use('/genres', genresRouter);
router.use('/platforms', platformsRouter);

module.exports = router;
