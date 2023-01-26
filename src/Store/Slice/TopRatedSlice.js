import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const TopRatedMovieInfo = createAsyncThunk("topratedmoviedata", async (data) => {
  return fetch(
   `https://api.themoviedb.org/3/movie/${data}`,
    {
      method: "GET",
      headers: {},
    }
  ).then((response) => response.json());
});
const TopRatedMovie = createSlice({
  name: "topratedmoviedata",
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
