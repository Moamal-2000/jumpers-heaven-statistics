import { jhApis } from "@/Api/jumpersHeaven";
import { decodeAsyncData, paginateData } from "@/Functions/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mapsData: [],
  mapsScroll: [],
};

export const fetchMaps = createAsyncThunk("globalSlice/fetchMaps", async () => {
  try {
    const response = await fetch(jhApis({}).map.getAllMaps, {
      headers: { Accept: "application/msgpack", "Accept-Encoding": "gzip" },
    });
    const mapsData = await decodeAsyncData(response);

    return mapsData;
  } catch (error) {
    console.error(error);
  }
});

export const mapsSlice = createSlice({
  initialState,
  name: "mapsSlice",
  reducers: {
    updateMapsState: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchMaps.pending, (state, action) => {})
      .addCase(fetchMaps.fulfilled, (state, action) => {
        const paginationMaps = paginateData(action.payload, 1);

        state.mapsData = action.payload;
        state.mapsScroll = paginationMaps;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchMaps.rejected, (state, action) => {});
  },
});

export const { updateMapsState } = mapsSlice.actions;
export default mapsSlice.reducer;
