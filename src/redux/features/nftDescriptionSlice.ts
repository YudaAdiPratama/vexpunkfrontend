// src/redux/nftDescriptionSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type NftDescriptionState = {
  nftDescription: string;
  loading: boolean;
  error: null | string;
}

const initialNftDescriptionState: NftDescriptionState = {
  nftDescription: "",
  loading: false,
  error: null,
};

const nftDescriptionSlice = createSlice({
  name: 'nftDescription',
  initialState: initialNftDescriptionState,
  reducers: {
    setNftDescription: (state, action: PayloadAction<string>) => {
      return {
        nftDescription: action.payload,
        loading: false,
        error: null
      }
    }
  }
});

export const { setNftDescription } = nftDescriptionSlice.actions;

export default nftDescriptionSlice.reducer;
