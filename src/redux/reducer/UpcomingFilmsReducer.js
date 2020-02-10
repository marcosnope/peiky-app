import { initialState, FILMS_UPCOMING } from '../constans'

export default (state = initialState.upcoming, action) => {
  switch (action.type) {
    case FILMS_UPCOMING:
      return action.payload;
    default:
      return state;
  }
};
