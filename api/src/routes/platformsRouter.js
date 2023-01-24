const { Router } = require('express');
const { getPlatforms } = require('../controllers/platformsControllers');

const platformsRouter = Router();

platformsRouter.get('/', async (req, res) => {
  try {
    const getAllPlatforms = await getPlatforms();
    res.status(200).json(getAllPlatforms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = platformsRouter;
