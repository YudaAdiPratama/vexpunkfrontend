"use client"

import React, { ReactNode } from 'react';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';

const chains = [mainnet, polygon];
const projectId = '5cc5b43805e7ff036b98a55d2f7a1d72'; // Replace with your actual project ID

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

interface Web3ModalProviderProps {
  children: ReactNode;
  ethereumClient: EthereumClient; // Add the ethereumClient prop
}

export function Web3ModalProvider({ children }: Web3ModalProviderProps) {
  return (
    <>
    {children}
    <Web3Modal projectId={'5cc5b43805e7ff036b98a55d2f7a1d72'} {...{ ethereumClient }} />
    </>
  );
}

