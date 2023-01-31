const axios = require('axios');
const { Videogame, Genre, Platform } = require('../db');
require('dotenv').config();
const { API_KEY } = process.env;

const getInfoApi = async () => {
  let games = [];

  for (let i = 1; i <= 5; i++) {
    let response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
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

const getInfoDB = async () => {
  let newDBArray = [];
  const responseDB = await Videogame.findAll({
    include: {
      model: Genre,
      attribute: ['name'],
      through: {
        attributes: [],
      },
    },
  });
  responseDB.map((element) => {
    newDBArray.push({
      id: element.id,
      name: element.name,
      image: element.image,
      genres: element.genres.map((genre) => genre.name).join(', '),
      rating: element.rating,
      platform: element.platform.map((platform) => platform).join(', '),
    });
  });
  return newDBArray;
};

const allInfoGames = async () => {
  const infoApi = await getInfoApi();
  const infoDB = await getInfoDB();
  const allInfo = infoDB.concat(infoApi);
  return allInfo;
};

const infoById = async (id) => {
  if (typeof id === 'string' && id.length > 8) {
    const data_db = await Videogame.findByPk(id, {
      include: {
        model: Genre,
        attributes: ['name'],
        through: {
          attributes: [],
        },
      },
    });
    return data_db;
  } else {
    let url_Id = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
    const gamesLoaded = await axios.get(url_Id);
    const element = gamesLoaded.data;
    const allInformation = {
      id: element.id,
      name: element.name,
      image: element.background_image,
      imageExtra: element.background_image_additional,
      description: element.description_raw,
      released: element.released,
      rating: element.rating,
      platform: element.platforms.map((element) => element.platform.name),
      genres: element.genres.map((element) => element.name),
    };
    return allInformation;
  }
};

const createGame = async (
  name,
  description,
  released,
  rating,
  genres,
  platforms,
  image
) => {
  const newGame = await Videogame.create({
    name,
    description,
    released,
    rating,
    platforms,
    image,
  });
  let genreDb = await Genre.findAll({ where: { name: genres } });
  newGame.addGenre(genreDb);
  return `The videogame "${name}" was successfully created.`;
};

module.exports = {
  allInfoGames,
  infoById,
  createGame,
  getInfoDB,
};
