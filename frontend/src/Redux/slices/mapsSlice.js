import { jhApis } from "@/Api/jumpersHeaven";
import { getFilteredMaps, getSortedMaps } from "@/Functions/filters";
import { decodeAsyncData, paginateData } from "@/Functions/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mapsData: [],
  mapsScroll: [],
  firstChunkMaps: [],
  allDataDisplayed: [],
  loading: true,
  error: false,
};

export const fetchMaps = createAsyncThunk(
  "globalSlice/fetchMaps",
  async (paramsObject) => {
    try {
      const response = await fetch(jhApis({}).map.getAllMaps, {
        headers: { Accept: "application/msgpack", "Accept-Encoding": "gzip" },
      });
      const mapsData = await decodeAsyncData(response);

      return { mapsData, paramsObject };
    } catch (error) {
      console.error(error);
    }
  }
);

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
        const paginationMaps = paginateData(sortedMapsData, 1);

        state.mapsData = sortedMapsData;
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
