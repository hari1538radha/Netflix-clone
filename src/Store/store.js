import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MovieDetails from "./Slice/RequestSlice";
const rootReducer = combineReducers({
  movieinfo: MovieDetails,
});
const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
