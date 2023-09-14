import { defineChain } from "viem"

export const vex = /*#__PURE__*/ defineChain({
  id: 97,
  name: 'VEX',
  network: 'VEXEVM',
  nativeCurrency: {
    decimals: 18,
    name: 'Vex',
    symbol: 'VEX',
  },
  rpcUrls: {
    default: { http: ['https://testnet.vexascan.com/evmapi'] },
    public: { http: ['https://testnet.vexascan.com/evmapi'] },
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
