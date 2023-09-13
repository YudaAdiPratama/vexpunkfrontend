import React from "react";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { vex } from "./vex";

type WagmiProviderType = {
  children: React.ReactNode;
};

const chains = [bscTestnet];
const projectId = "5cc5b43805e7ff036b98a55d2f7a1d72";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);
const WagmiProvider = ({ children }: WagmiProviderType) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal themeVariables={{
    '--w3m-font-family': 'Roboto, sans-serif',
    '--w3m-accent-color': '#0F4DE6',
    '--w3m-background-image-url': 'https://web3modal.com/images/theme_bg.png'
  }} projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default WagmiProvider;
