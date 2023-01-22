const { Router } = require('express');
const {
  getInfoApi,
  infoById,
  infoByName,
  createGame,
} = require('../controllers/gamesControllers');

const gamesRouter = Router();

gamesRouter.get('/', async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const games = await infoByName(name);
      return res.status(200).json(games);
    } else {
      const games = await getInfoApi();
      return res.status(200).json(games);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

gamesRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const detailGame = await infoById(id);
    res.status(200).json(detailGame);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

gamesRouter.post('/', async (req, res) => {
  try {
    const { name, description, released, rating, genres, platforms } = req.body;
    const newGame = await createGame(
      name,
      description,
      released,
      rating,
      genres,
      platforms
    );
    res.status(200).json(newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = gamesRouter;
