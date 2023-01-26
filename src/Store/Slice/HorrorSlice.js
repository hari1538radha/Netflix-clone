import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const HorrorMovieInfo = createAsyncThunk("horrormovie", async (data) => {
  return fetch(`https://api.themoviedb.org/3/${data}`, {
    method: "GET",
    headers: {},
  }).then((response) => response.json());
});
const HorrorMovie = createSlice({
  name: "horrormovie",
  initialState: {
    HorrorMovieData: [],
    HorrorMovieloading: true,
  },
  extraReducers: {
    [HorrorMovieInfo.pending]: (state, action) => {
      state.HorrorMovieloading = true;
    },
    [HorrorMovieInfo.fulfilled]: (state, action) => {
      state.HorrorMovieloading = false;
      state.HorrorMovieData = action.payload;
    },
    [HorrorMovieInfo.rejected]: (state, action) => {
      state.HorrorMovieloading = true;
    },
  },
});

const HorrorMovieDetails = HorrorMovie.reducer;
export default HorrorMovieDetails;
