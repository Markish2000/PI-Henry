import {
  GET_ALL_GAMES,
  CHANGE_MODAL,
  GET_DETAIL,
  SEND_INFO_LOGIN,
  FILTER_BY_GENRE,
  FILTER_BY_SEARCH,
  GET_ALL_GENRES,
  GET_ALL_PLATFORMS,
  INITIAL_PAGINATING,
  PAGINATING_DYNAMIC,
  INCREMENT_ACCUMULATOR,
  DECREMENT_ACCUMULATOR,
} from './actions';

let initialState = {
  modal: false,
  infoLoginModal: [],
  allGames: [],
  paginating: [],
  paginatingAccumulator: 0,
  allGenres: [],
  allPlatforms: [],
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

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
