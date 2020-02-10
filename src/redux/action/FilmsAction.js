import {
  FILMS_POPULARES,
  FILMS_UPCOMING,
  FILMS_TOP_RATED,
  VIDEO_FILM
} from "../constans";
import { services } from "../../services";

const popularFilms = data => {
  return {
    type: FILMS_POPULARES,
    payload: data
  };
};

const upcomingFilms = data => {
  return {
    type: FILMS_UPCOMING,
    payload: data
  };
};

const topRatedFilms = data => {
  return {
    type: FILMS_TOP_RATED,
    payload: data
  };
};

const videoFilm = data => {
  return {
    type: VIDEO_FILM,
    payload: data
  };
};

export const getPopularFilms = _ => async dispatch => {
  const response = await services.getPopular();
  dispatch(popularFilms(response));
};

export const getTopRatedFilms = _ => async dispatch => {
  const response = await services.getTopRated();
  dispatch(topRatedFilms(response));
};

export const getUpcomingFilms = _ => async dispatch => {
  const response = await services.getUpcoming();
  dispatch(upcomingFilms(response));
};

export const getVideoFilms = idFilm => async dispatch => {
  const response = await services.getVideo(idFilm);
  dispatch(videoFilm(response));
};
