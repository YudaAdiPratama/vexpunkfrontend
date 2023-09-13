import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type NftTotalMintedState = {
  totalMinted: string;
  loading: boolean;
  error: null | Error;
};

const initialState: NftTotalMintedState = {
  totalMinted: '',
  loading: false,
  error: null,
};

const nftTotalMintedSlice = createSlice({
  name: 'nftstotalminted',
  initialState,
  reducers: {
    setNftTotalMinted: (state, action: PayloadAction<string>) => {
      state.totalMinted = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setNftTotalMinted } = nftTotalMintedSlice.actions;
export default nftTotalMintedSlice.reducer;
