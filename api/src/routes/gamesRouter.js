const { Router } = require('express');
const {
  infoById,
  createGame,
  allInfoGames,
  getInfoDB,
} = require('../controllers/gamesControllers');

const gamesRouter = Router();

gamesRouter.get('/', async (req, res) => {
  const { name } = req.query;
  const allGames = await allInfoGames();
  try {
    if (name) {
      const games = allGames.filter((element) =>
        element.name.toLowerCase().includes(name.toLowerCase())
      );
      return games.length
        ? res.status(200).json(games.splice(0, 15))
        : res.status(400).json(`No existe ${name} en nuestra base de datos`);
    } else {
      return res.status(200).json(allGames);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

gamesRouter.get('/db', async (req, res) => {
  const allGameDB = await getInfoDB();
  try {
    res.status(200).send(allGameDB);
  } catch (error) {
    res.status(400).send('Me rompí');
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
    res.status(200).json(req.body);
    console.log('Línea 51 Back-End,', newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log('Línea 54 Back-End,', error);
  }
});

module.exports = gamesRouter;
