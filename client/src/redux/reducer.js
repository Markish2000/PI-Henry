import { GET_ALL_GAMES, CHANGE_MODAL, GET_DETAIL } from './actions';

let initialState = {
  allGames: [],
  modal: true,
  favorite: [],
  search: [],
  detail: [],
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

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
