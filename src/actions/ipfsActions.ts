// actions/ipfsActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFromIPFS } from '../utils/ipfs';

export const fetchIPFSData = createAsyncThunk('ipfs/fetchData', async (cid: string) => {
  const data = await fetchFromIPFS(cid);
  return data;
});
