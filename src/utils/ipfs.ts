// ipfs.ts
import IPFS from 'ipfs-http-client';

const ipfs = IPFS.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export const fetchFromIPFS = async (cid: string): Promise<string> => {
  try {
    const data = await ipfs.cat(cid);
    return data.toString();
  } catch (error) {
    throw new Error('Error fetching data from IPFS: ' + error);
  }
};
