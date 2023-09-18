"use client"

import { ModeToggle } from '@/components/ModeToggle';
import './container.css';
import './walletconnect.css';
import { Web3Button } from '@web3modal/react';
import { NFTCard } from '@/components/Mint';
import ConnectButtonModal from '@/components/ui/connectButton';
import walletIcon from './assets/wallet.svg'



export default function Home() {

  return (
    <div className='header'>
        <div className='connect-btn'>
      <Web3Button balance='show' icon='show' avatar='show' />
      {/* <ConnectButtonModal icon={walletIcon} color={"red"} onClick={undefined}>CONNECT</ConnectButtonModal> */}
      </div>
        <div className='content'>
          <NFTCard />
        </div>
    </div>
  );
}
