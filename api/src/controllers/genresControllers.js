const axios = require('axios');
const { Genre } = require('../db');
require('dotenv').config();
const { API_KEY } = process.env;

const getGenres = async () => {
  const genresApi = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );

  const genres = await genresApi.data.results.map((element) => element.name);
  genres.forEach((e) => Genre.findOrCreate({ where: { name: e } }));
  const allGenres = await Genre.findAll();
  return allGenres;
};

module.exports = {
  getGenres,
};
