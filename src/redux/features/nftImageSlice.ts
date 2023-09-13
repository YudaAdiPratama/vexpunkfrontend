// src/redux/nftImageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type NftImageState = {
  nftImage: string;
  loading: boolean;
  error: null | string;
}

const initialNftImageState: NftImageState = {
  nftImage: "",
  loading: false,
  error: null,
};

const nftImageSlice = createSlice({
  name: 'nftImage',
  initialState: initialNftImageState,
  reducers: {
    setNftImage: (state, action: PayloadAction<string>) => {
      return {
        nftImage: action.payload,
        loading: false,
        error: null
      }
    }
  }
});

export const { setNftImage } = nftImageSlice.actions;

export default nftImageSlice.reducer;
