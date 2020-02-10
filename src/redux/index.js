import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  PopularFilmsReducer,
  TopRatedFilmsReducer,
  UpcomingFilmsReducer,
  VideoFilmReducer
} from "./reducer";

const middleware = [thunk];
const reducers = combineReducers({
	popular: PopularFilmsReducer,
	topRated: TopRatedFilmsReducer,
  upcoming: UpcomingFilmsReducer,
  videoFilm: VideoFilmReducer
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
