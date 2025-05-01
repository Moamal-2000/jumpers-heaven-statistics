import { getFilteredMaps, getSortedMaps } from "@/Functions/filters";
import { modifyMapsData, paginateData } from "@/Functions/utils";
import { createSlice } from "@reduxjs/toolkit";
import { fetchMaps } from "../thunks/mapsThunk";

const initialState = {
  mapsData: [],
  mapsScroll: [],
  firstChunkMaps: [],
  allDataDisplayed: [],
  loading: true,
  error: false,
};

export const mapsSlice = createSlice({
  initialState,
  name: "mapsSlice",
  reducers: {
    updateMapsState: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchMaps.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
      .addCase(fetchMaps.fulfilled, (state, { payload }) => {
        const { mapsData, paramsObject } = payload;
        const filteredMapsData = getFilteredMaps(mapsData, paramsObject);
        const sortedMapsData = getSortedMaps(filteredMapsData, paramsObject);
        const modifiedMapsData = modifyMapsData(sortedMapsData);

        const paginationMaps = paginateData(modifiedMapsData, 1);

        state.mapsData = modifiedMapsData;
        state.mapsScroll = paginationMaps;
        state.firstChunkMaps = paginationMaps;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchMaps.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { updateMapsState } = mapsSlice.actions;
export default mapsSlice.reducer;
