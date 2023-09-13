// src/redux/ipfsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IpfsState {
  data: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: IpfsState = {
  data: null,
  loading: false,
  error: null,
};

const ipfsSlice = createSlice({
  name: 'ipfs',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<string>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.data = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = ipfsSlice.actions;

export default ipfsSlice.reducer;
