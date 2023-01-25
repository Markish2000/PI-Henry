import {
  GET_ALL_GAMES,
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
} from './actions';

let initialState = {
  modal: false,
  infoLoginModal: [],
  allGames: [],
  paginating: [],
  paginatingAccumulator: 1,
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
        paginating: [...state.allGames].filter((element) =>
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

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
