import {
  GET_ALL_GAMES,
  CHANGE_MODAL,
  GET_DETAIL,
  SEND_INFO_LOGIN,
  FILTER_BY_GENRE,
  FILTER_BY_SEARCH,
  GET_ALL_GENRES,
  GET_ALL_PLATFORMS,
} from './actions';

let initialState = {
  infoLoginModal: [],
  allGames: [],
  allGenres: [],
  allPlatforms: [],
  modal: false,
  favorite: [],
  search: [],
  detail: [],
  filterByGenre: [],
  filterBySearch: [],
  searchResult: '',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        allGames: action.payload,
        filterByGenre: action.payload,
        filterBySearch: action.payload,
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

    case SEND_INFO_LOGIN:
      return {
        ...state,
        infoLoginModal: action.payload,
      };

    case FILTER_BY_GENRE:
      return {
        ...state,
        filterByGenre: [
          ...state.allGames.filter((element) =>
            element.genres.includes(action.payload)
          ),
        ],
      };

    case FILTER_BY_SEARCH:
      return {
        ...state,
        // filterBySearch: [
        //   ...state.allGames.filter((element) =>
        //     element.name
        //       .toString()
        //       .toLowerCase()
        //       .includes(action.payload.toLowerCase())
        //   ),
        // ],
        searchResult: action.payload,
      };

    case GET_ALL_GENRES:
      return {
        ...state,
        allGenres: action.payload,
      };

    case GET_ALL_PLATFORMS:
      return {
        ...state,
        allPlatforms: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
