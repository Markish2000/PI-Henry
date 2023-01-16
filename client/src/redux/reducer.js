import { GET_ALL_GAMES } from './actions';

const initialState = {
  allGames: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        allGames: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
