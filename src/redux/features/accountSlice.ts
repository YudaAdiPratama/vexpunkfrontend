// src/redux/ipfsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type accountState = {
  account: string;
  loading: boolean,
  error: null,
}


const initialBalanceOfState: accountState = {
    account: "",
    loading: false,
    error: null,
};

const accountsSlice = createSlice({
  name: 'account',
  initialState: initialBalanceOfState,
  reducers: {
    setaccounts: (state, action: PayloadAction<string>) => {
      return {
        account: action.payload,
          loading: false,
          error: null
      }
    }
  }
});


export const { setaccounts  } = accountsSlice.actions;

export default accountsSlice.reducer;
