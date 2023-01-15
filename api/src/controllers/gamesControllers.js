const { API_KEY } = process.env;

const getAllGames = async () => {
  const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
  const data = await response.json();
  return data;
};

module.exports = {
  getAllGames,
};
