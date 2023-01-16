import axios from 'axios';
export const GET_ALL_GAMES = 'GET_ALL_GAMES';

export const getAllGames = () => {
  return async (dispatch) => {
    const response = await axios('http://localhost:3001/games');
    dispatch({ type: 'GET_ALL_GAMES', payload: response.data });
  };
};
