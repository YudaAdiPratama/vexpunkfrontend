// src/redux/ipfsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IpfsMetadataState {
  dataArray: string[] | null; // Modify to store an array of strings
  loading: boolean;
  error: string | null;
}

const initialState: IpfsMetadataState = {
  dataArray: null, // Modify to store an array of strings
  loading: false,
  error: null,
};

const ipfsMetadataSlice = createSlice({
  name: 'ipfsmetadata',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<string[]>) { // Modify the payload type
      state.dataArray = action.payload; // Update the state field with the array
      state.loading = false;
      state.error = null;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.dataArray = null; // Modify to clear the array
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = ipfsMetadataSlice.actions;

export default ipfsMetadataSlice.reducer;
