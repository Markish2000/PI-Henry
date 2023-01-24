import axios from 'axios';
export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const CHANGE_MODAL = 'CHANGE_MODAL';
export const GET_DETAIL = 'GET_DETAIL';
export const SEND_INFO_LOGIN = 'SEND_INFO_LOGIN';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_SEARCH = 'FILTER_BY_SEARCH';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const GET_ALL_PLATFORMS = 'GET_ALL_PLATFORMS';
export const INCREMENT_ACCUMULATOR = 'INCREMENT_ACCUMULATOR';
export const DECREMENT_ACCUMULATOR = 'DECREMENT_ACCUMULATOR';
export const INITIAL_PAGINATING = 'INITIAL_PAGINATING';
export const PAGINATING_DYNAMIC = 'PAGINATING_DYNAMIC';

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
    const array = [];
    array.push(response.data);
    dispatch({ type: 'GET_DETAIL', payload: array });
  };
};

export const sendInfoLogin = (name, lastName) => {
  return {
    type: SEND_INFO_LOGIN,
    payload: `${name} ${lastName}`,
  };
};

export const filterByGenre = (genre) => {
  return {
    type: FILTER_BY_GENRE,
    payload: genre,
  };
};

export const filterBySearch = (value) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/games?name=${value}`
    );
    dispatch({ type: 'GET_ALL_GAMES', payload: response.data });
  };
};

export const getAllGenres = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/genres');
    dispatch({ type: 'GET_ALL_GENRES', payload: response.data });
  };
};

export const getAllPlatforms = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/platforms');
    dispatch({ type: 'GET_ALL_PLATFORMS', payload: response.data });
  };
};

export const initialPaginating = () => {
  return {
    type: INITIAL_PAGINATING,
  };
};

export const paginatingDynamic = () => {
  return {
    type: PAGINATING_DYNAMIC,
  };
};

export const incrementAccumulator = () => {
  return {
    type: INCREMENT_ACCUMULATOR,
  };
};

export const decrementAccumulator = () => {
  return {
    type: DECREMENT_ACCUMULATOR,
  };
};
