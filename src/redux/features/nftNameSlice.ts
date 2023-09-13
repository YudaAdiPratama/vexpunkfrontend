// src/redux/ipfsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type NftNameState = {
  nftName: string;
  loading: boolean,
  error: null,
}


const initialNftNameState: NftNameState = {
    nftName: "",
    loading: false,
    error: null,
};

const nftNameSlice = createSlice({
  name: 'nftsname',
  initialState: initialNftNameState,
  reducers: {
    setNftName: (state, action: PayloadAction<string>) => {
      return {
        nftName: action.payload,
          loading: false,
          error: null
      }
    }
  }
});


export const { setNftName  } = nftNameSlice.actions;

export default nftNameSlice.reducer;
