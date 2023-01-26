import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const upcominginfo = createAsyncThunk("upcommingmovie", async (data) => {
  return fetch(
   `https://api.themoviedb.org/3/movie/${data}`,
    {
      method: "GET",
      headers: {},
    }
  ).then((response) => response.json());
});
const Upcommingmovie = createSlice({
  name: "upcommingmovie",
  initialState: {
    UpcommingmovieData: [],
    upcommingmovieLoading: true,
  },
  extraReducers: {
    [upcominginfo.pending]: (state, action) => {
      state.upcommingmovieLoading = true;
    },
    [upcominginfo.fulfilled]: (state, action) => {
      state.upcommingmovieLoading = false;
      state.UpcommingmovieData=  action.payload;
    },
    [upcominginfo.rejected]: (state, action) => {
      state.upcommingmovieLoading = true;
    },
  },
});

const UpcommingmovieDetails = Upcommingmovie.reducer;
export default UpcommingmovieDetails;
