// src/redux/ipfsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type NftBalanceState = {
  balancesOf: string;
  loading: boolean,
  error: null,
}


const initialBalanceOfState: NftBalanceState = {
    balancesOf: "",
    loading: false,
    error: null,
};

const nftBalancesSlice = createSlice({
  name: 'nftsbalancesof',
  initialState: initialBalanceOfState,
  reducers: {
    setNftBalances: (state, action: PayloadAction<string>) => {
      return {
          balancesOf: action.payload,
          loading: false,
          error: null
      }
    }
  }
});


export const { setNftBalances  } = nftBalancesSlice.actions;

export default nftBalancesSlice.reducer;
