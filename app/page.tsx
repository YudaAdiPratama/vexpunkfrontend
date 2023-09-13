"use client"

import { ModeToggle } from '@/components/ModeToggle';
import './container.css';
import './walletconnect.css';
import { Web3Button } from '@web3modal/react';
import { NFTCard } from '@/components/Mint';



export default function Home() {

  return (
    <div className='header'>
        <div className='connect-btn'>
      <Web3Button />
      </div>
      <ModeToggle />
        <div className='content'>
          <NFTCard />
        </div>
    </div>
  );
}
