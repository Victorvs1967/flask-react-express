// fronten/src/redux/reducers.js

import { START_FETCHING_CARD, FINISH_FETCHING_CARD } from './actions';

const root = (state, action) => {
  switch (action.type) {
    case START_FETCHING_CARD:
      return {
        ...state,
        page: {
          ...state.page,
          isFetching: true
        }
      };
    case FINISH_FETCHING_CARD:
      return {
        ...state,
        page: {
          ...state.page,
          isFetching: false,
          cardData: action.cardData
        }
      };
  }
  return state;
};

export default root;