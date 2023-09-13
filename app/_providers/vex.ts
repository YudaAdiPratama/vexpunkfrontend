import { defineChain } from "viem"

export const vex = /*#__PURE__*/ defineChain({
  id: 1337,
  name: 'ETH',
  network: 'Ethereum',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:7545'] },
    public: { http: ['http://127.0.0.1:7545'] },
  },
  blockExplorers: {
    etherscan: {
      name: 'VEX EVM Explorer',
      url: 'https://testnet.vexascan.com/evmexplorer',
    },
    default: {
      name: 'VEX EVM Explorer',
      url: 'https://testnet.vexascan.com/evmexplorer',
    },
  },
  contracts: {
    multicall3: {
      address: '0xbBbBBbBbbbBbbBbbbBbbbBBbdaba056e40000000',
      blockCreated: 1,
    },
  },
  testnet: true
})
