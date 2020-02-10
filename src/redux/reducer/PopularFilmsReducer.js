import { initialState, FILMS_POPULARES } from '../constans'

export default (state = initialState.popular, action) => {
  switch (action.type) {
    case FILMS_POPULARES:
      return action.payload;
    default:
      return state;
  }
};
