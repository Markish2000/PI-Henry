const { Router } = require('express');
const { allInfoGames } = require('../controllers/gamesControllers');

const gamesRouter = Router();

gamesRouter.get('/', async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const games = await allInfoGames(name);
      return res.status(200).json(games);
    } else {
      const games = await allInfoGames();
      return res.status(200).json(games);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = gamesRouter;
