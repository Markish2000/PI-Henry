const axios = require('axios');
const { Platform } = require('../db');
require('dotenv').config();
const { API_KEY } = process.env;

const getPlatforms = async () => {
  const platformsApi = await axios.get(
    `https://api.rawg.io/api/platforms?key=${API_KEY}`
  );
  const platforms = await platformsApi.data.results.map(
    (element) => element.name
  );
  platforms.forEach((e) => Platform.findOrCreate({ where: { name: e } }));
  const allPlatforms = await Platform.findAll();
  return allPlatforms;
};

module.exports = {
  getPlatforms,
};
