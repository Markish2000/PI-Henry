import axios from 'axios';
export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const CHANGE_MODAL = 'CHANGE_MODAL';
export const GET_DETAIL = 'GET_DETAIL';

export const getAllGames = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/games');
    dispatch({ type: 'GET_ALL_GAMES', payload: response.data });
  };
};

export const changeModal = (payload) => {
  return {
    type: CHANGE_MODAL,
    payload: payload,
  };
};

export const getDetail = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/games/${id}`);
    dispatch({ type: 'GET_DETAIL', payload: response.data });
  };
};
