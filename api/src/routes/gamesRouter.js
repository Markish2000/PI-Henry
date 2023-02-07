const { Router } = require('express');
const {
  infoById,
  getInfoBySearch,
  createGame,
  allInfoGames,
} = require('../controllers/gamesControllers');

const gamesRouter = Router();

gamesRouter.get('/', async (req, res) => {
  const { name } = req.query;
  const allGames = await allInfoGames();
  const getSearch = await getInfoBySearch(name);
  try {
    if (name) {
      const games = getSearch.filter((element) => element.name.toLowerCase());
      return games.length
        ? res.status(200).json(games.splice(0, 15))
        : res
            .status(400)
            .json(`The game ${name} does not exist in our database`);
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
  const { name, description, released, rating, genres, platform, image } =
    req.body;
  try {
    const newGame = await createGame(
      name,
      description,
      released,
      rating,
      genres,
      platform,
      image
    );
    res.status(200).json(newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = gamesRouter;
