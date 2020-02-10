import { initialState, VIDEO_FILM } from '../constans'

export default (state = initialState.videoFilm, action) => {
  switch (action.type) {
    case VIDEO_FILM:
      return action.payload;
    default:
      return state;
  }
};
