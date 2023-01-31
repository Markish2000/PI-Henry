const getInfoBySearch = async (name) => {
  let gamesSearch = [];
  let saveGames = [];
  let url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`;
  gamesSearch = await axios.get(url);
  let games_Loaded = gamesSearch.data.results.map((element) => element);
  return games_Loaded;
};
