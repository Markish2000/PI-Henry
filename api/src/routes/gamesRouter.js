const { Router } = require('express');
const {
  getInfoApi,
  infoById,
  createGame,
} = require('../controllers/gamesControllers');

const gamesRouter = Router();

gamesRouter.get('/', async (req, res) => {
  const { name } = req.query;
  const allGames = await getInfoApi();
  try {
    if (name) {
      const games = allGames.filter((element) =>
        element.name.toLowerCase().includes(name.toLowerCase())
      );
      return games.length
        ? res.status(200).json(games)
        : res.status(400).json(`No existe ${name} en nuestra base de datos`);
    } else {
      return res.status(200).json(allGames);
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
