import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const MoviedbInfo = createAsyncThunk("trendingmoviedata", async (data) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=52`,
    {
      method: "GET",
      headers: {},
    }
  ).then((response) => response.json());
});
const MovieData = createSlice({
  name: "trendingmoviedatas",
  initialState: {
    MovieData: [],
    Loading: true,
  },
  extraReducers: {
    [MoviedbInfo.pending]: (state, action) => {
      state.Loading = true;
    },
    [MoviedbInfo.fulfilled]: (state, action) => {
      state.Loading = false;
      state.MovieData = action.payload;
    },
    [MoviedbInfo.rejected]: (state, action) => {
      state.Loading = true;
    },
  },
});

const MovieDetails = MovieData.reducer;
export default MovieDetails;
