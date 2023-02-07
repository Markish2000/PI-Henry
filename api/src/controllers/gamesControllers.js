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

const getInfoBySearch = async (name) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`
  );
  const joinElements = (elements) =>
    elements.map(({ name }) => name).join(', ');

  return response.data.results.map(
    ({ id, name, background_image, genres, rating, platforms }) => ({
      id,
      name,
      image: background_image,
      genres: joinElements(genres),
      rating,
      platforms: joinElements(platforms),
    })
  );
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
      platforms: element.platform.map((platform) => platform).join(', '),
    });
  });
  return newDBArray;
};

const allInfoGames = async () => {
  const [infoApi, infoDB] = await Promise.all([getInfoApi(), getInfoDB()]);
  return [...infoDB, ...infoApi];
};

const infoById = async (id) => {
  let data;
  if (typeof id === 'string' && id.length > 8) {
    const [data_db] = await Videogame.findAll({
      where: { id },
      include: [
        {
          model: Genre,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      ],
    });

    data = {
      id: data_db.id,
      name: data_db.name,
      description: data_db.description,
      released: data_db.released,
      rating: data_db.rating,
      platform: data_db.platform,
      image: data_db.image,
      genres: data_db.genres.map((genre) => genre.name),
    };
  } else {
    const url_Id = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
    const { data: gamesLoaded } = await axios.get(url_Id);

    data = {
      id: gamesLoaded.id,
      name: gamesLoaded.name,
      image: gamesLoaded.background_image,
      imageExtra: gamesLoaded.background_image_additional,
      description: gamesLoaded.description_raw,
      released: gamesLoaded.released,
      rating: gamesLoaded.rating,
      platform: gamesLoaded.platforms.map((element) => element.platform.name),
      genres: gamesLoaded.genres.map((element) => element.name),
    };
  }
  return data;
};

const createGame = async (
  name,
  description,
  released,
  rating,
  genres,
  platform,
  image
) => {
  const newGame = await Videogame.create({
    name,
    description,
    released,
    rating,
    platform,
    image,
  });
  let genreDb = await Genre.findAll({ where: { name: genres } });
  newGame.addGenre(genreDb);
  return `The videogame "${name}" was successfully created.`;
};

module.exports = {
  allInfoGames,
  getInfoBySearch,
  infoById,
  createGame,
  getInfoDB,
};
