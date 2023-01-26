import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MovieDetails from "./Slice/TrendingSlice";
import TopRatedMovieDetails from "./Slice/TopRatedSlice";

const rootReducer = combineReducers({
  movieinfo: MovieDetails,
  TopMovieinfo:TopRatedMovieDetails
});
const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
