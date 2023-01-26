import {
  GET_ALL_GAMES,
  BEST_GAMES,
  CHANGE_MODAL,
  GET_DETAIL,
  SEND_INFO_LOGIN,
  FILTER_BY_GENRE,
  FILTER_BY_PLATFORM,
  FILTER_BY_SEARCH,
  GET_ALL_GENRES,
  GET_ALL_PLATFORMS,
  INITIAL_PAGINATING,
  PAGINATING_DYNAMIC,
  INCREMENT_ACCUMULATOR,
  DECREMENT_ACCUMULATOR,
  ASCENDING_RATING,
  DESCENDING_RATING,
  ASCENDING_ALPHABET,
  DESCENDING_ALPHABET,
  FILTER_PAGINATION_BY_SEARCH,
} from './actions';

let initialState = {
  modal: true,
  infoLoginModal: [],
  allGames: [],
  paginating: [],
  bestGames: [],
  paginatingAccumulator: 0,
  allGenres: [],
  allPlatforms: [],
  favorite: [],
  search: [],
  detail: [],
  filterBySearch: [],
  searchResult: '',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        allGames: action.payload,
        filterBySearch: action.payload,
      };

    case BEST_GAMES:
      return {
        ...state,
        bestGames: [...state.allGames].splice(0, 9),
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

    case FILTER_BY_SEARCH:
      return {
        ...state,
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

    case INITIAL_PAGINATING:
      return {
        ...state,
        paginating: [...state.allGames].splice(0, 15),
      };

    case PAGINATING_DYNAMIC:
      return {
        ...state,
        paginating: [...state.allGames].splice(
          state.paginatingAccumulator * 15,
          15
        ),
      };

    case INCREMENT_ACCUMULATOR:
      return {
        ...state,
        paginatingAccumulator: state.paginatingAccumulator + 1,
      };

    case DECREMENT_ACCUMULATOR:
      return {
        ...state,
        paginatingAccumulator: state.paginatingAccumulator - 1,
      };

    case ASCENDING_RATING:
      return {
        ...state,
        paginating: [...state.paginating].sort((a, b) => b.rating - a.rating),
      };

    case FILTER_BY_GENRE:
      return {
        ...state,
        paginating: [...state.paginating].filter((element) =>
          element.genres.includes(action.payload)
        ),
      };

    case FILTER_BY_PLATFORM:
      return {
        ...state,
        paginating: [...state.paginating].filter((element) =>
          element.platforms.includes(action.payload)
        ),
      };

    case DESCENDING_RATING:
      return {
        ...state,
        paginating: [...state.paginating].sort((a, b) => a.rating - b.rating),
      };

    case ASCENDING_ALPHABET:
      return {
        ...state,
        paginating: [...state.paginating].sort((a, b) =>
          b.name.localeCompare(a.name)
        ),
      };

    case DESCENDING_ALPHABET:
      return {
        ...state,
        paginating: [...state.paginating].sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      };

    case FILTER_PAGINATION_BY_SEARCH:
      return {
        ...state,
        paginating: [...state.paginating].filter((element) =>
          element.name
            .toString()
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        ),
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
