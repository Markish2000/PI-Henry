const { default: axios } = require('axios');
require('dotenv').config();
// !! const { Videogame } = require('../db'); Consumir base de datos
const { API_KEY } = process.env;

const getInfoApi = async () => {
  let games = [];

  for (let i = 0; i < 5; i++) {
    let response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${1}`
    );

    response.data.results.map((element) => {
      games.push({
        id: element.id,
        name: element.name,
        image: element.background_image,
        genres: element.genres.map((genre) => genre.name).join(', '),
        rating: element.rating,
        platforms: element.platforms.map((e) => e.platform.name).join(', '),
      });
    });
  }
  return games;
};

const getInfoDB = async () => {};

const allInfoGames = async () => {
  const infoApi = await getInfoApi();
  const infoDB = await getInfoDB();
  const allInfo = infoApi.concat(infoDB);
  return allInfo;
};

module.exports = {
  getInfoApi,
};
