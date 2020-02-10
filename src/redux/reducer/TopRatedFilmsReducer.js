import { initialState, FILMS_TOP_RATED } from '../constans'

export default (state = initialState.topRated, action) => {
  switch (action.type) {
    case FILMS_TOP_RATED:
      return action.payload;
    default:
      return state;
  }
};
