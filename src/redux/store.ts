// store.js
import { configureStore } from '@reduxjs/toolkit';
import nftMaxSupplySlice from './features/nftMaxSupplySlice';
import nftBalancesOfSlice from './features/nftBalancesOfSlice';
import nftTotalMintedSlice from './features/nftTotalMintedSlice';
import nftImageSlice from './features/nftImageSlice';
import nftNameSlice from './features/nftNameSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import nftDescriptionSlice from './features/nftDescriptionSlice';

export const store = configureStore({
  reducer: {
    nftsBalancesOf : nftBalancesOfSlice,
    nftMaxSupply: nftMaxSupplySlice,
    nftTotalMinted: nftTotalMintedSlice,
    nftName: nftNameSlice,
    nftImage: nftImageSlice,
    nftDescription: nftDescriptionSlice
    // other reducers if any
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
