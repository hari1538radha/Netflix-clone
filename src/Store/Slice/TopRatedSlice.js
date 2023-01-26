import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const TopRatedMovieInfo = createAsyncThunk("moviedata", async (data) => {
  return fetch(
   `https://api.themoviedb.org/3/search/movie?api_key=&language=en-US&query=horror&page=1&include_adult=false`,
    {
      method: "GET",
      headers: {},
    }
  ).then((response) => response.json());
});
const TopRatedMovie = createSlice({
  name: "MoveiInfo",
  initialState: {
    TopMoviedata: [],
    TopmovieLoading: true,
  },
  extraReducers: {
    [TopRatedMovieInfo.pending]: (state, action) => {
      state.TopmovieLoading = true;
    },
    [TopRatedMovieInfo.fulfilled]: (state, action) => {
      state.TopmovieLoading = false;
      state.TopMoviedata = action.payload;
    },
    [TopRatedMovieInfo.rejected]: (state, action) => {
      state.TopmovieLoading = true;
    },
  },
});

const TopRatedMovieDetails = TopRatedMovie.reducer;
export default TopRatedMovieDetails;
