import { GET_ALL_GAMES, CHANGE_MODAL } from './actions';

let initialState = {
  allGames: [],
  modal: true,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        allGames: action.payload,
      };

    case CHANGE_MODAL:
      return {
        ...state,
        modal: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
