const { Router } = require('express');
const { getAllGames } = require('../controllers/gamesControllers');

const gamesRouter = Router();

gamesRouter.get('/', async (req, res) => {
  try {
    const allGames = await getAllGames();
    res.status(200).send(allGames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = gamesRouter;
