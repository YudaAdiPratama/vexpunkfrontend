import { defineChain } from "viem"

export const vex = /*#__PURE__*/ defineChain({
  id: 5522,
  name: 'VEX EVM',
  network: 'vex',
  nativeCurrency: {
    decimals: 18,
    name: 'VEX',
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
  }
})
