const { Router } = require('express');
const { getInfoApi, infoById } = require('../controllers/gamesControllers');

const gamesRouter = Router();

gamesRouter.get('/', async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const games = await getInfoApi(name);
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

module.exports = gamesRouter;
