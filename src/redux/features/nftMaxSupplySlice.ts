import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type NftMaxSupplyState = {
  maxSupply: string;
  loading: boolean;
  error: null | Error;
};

const initialState: NftMaxSupplyState = {
  maxSupply: '',
  loading: false,
  error: null,
};

const nftMaxSupplySlice = createSlice({
  name: 'nftsmaxsupply',
  initialState,
  reducers: {
    setNftMaxSupply: (state, action: PayloadAction<string>) => {
      state.maxSupply = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setNftMaxSupply } = nftMaxSupplySlice.actions;
export default nftMaxSupplySlice.reducer;
