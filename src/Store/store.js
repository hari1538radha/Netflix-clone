import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MovieDetails from "./Slice/TrendingSlice";
import TopRatedMovieDetails from "./Slice/TopRatedSlice";
import UpcommingmovieDetails from "./Slice/UpcomingSLice";
import HorrorMovieDetails from "./Slice/HorrorSlice";
import NetflixOriginalDetails from "./Slice/NetflixOriginal";
const rootReducer = combineReducers({
  movieinfo: MovieDetails,
  TopMovieinfo:TopRatedMovieDetails,
  upcominginfo:UpcommingmovieDetails,
  horrormovieinfo:HorrorMovieDetails,
  netflixoriginalinfo:NetflixOriginalDetails

});
const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
