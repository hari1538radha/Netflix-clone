import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const NetflixOriginalInfo = createAsyncThunk("NetflixOriginals", async (data) => {
  return fetch(
   `https://api.themoviedb.org/3/${data}`,
    {
      method: "GET",
      headers: {},
    }
  ).then((response) => response.json());
});
const NetflixDatas = createSlice({
  name: "NetflixOriginals",
  initialState: {
    NetflixOriginalData: [],
    NetflixorgonalLoading: true,
  },
  extraReducers: {
    [NetflixOriginalInfo.pending]: (state, action) => {
      state.NetflixorgonalLoading = true;
    },
    [NetflixOriginalInfo.fulfilled]: (state, action) => {
      state.NetflixorgonalLoading = false;
      state.NetflixOriginalData=  action.payload;
    },
    [NetflixOriginalInfo.rejected]: (state, action) => {
      state.NetflixorgonalLoading = true;
    },
  },
});

const NetflixOriginalDetails = NetflixDatas.reducer;
export default NetflixOriginalDetails;
