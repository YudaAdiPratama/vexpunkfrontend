"use client"

import Image from 'next/image';
import { ModeToggle } from '@/components/ModeToggle';
import './container.css';
import './walletconnect.css';
import { Web3Button } from '@web3modal/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { NFTCard } from '@/components/Mint';



export default function Home() {

  return (
    <div className='header'>
        <div className='connect-btn'>
      <Web3Button />
      </div>
      <ModeToggle />
        {/* Include any components that need access to Web3Modal here */}
        <div className='content'>
          <NFTCard />
          {/* <Card>
              <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                  <p>Card Content</p>
              </CardContent>
              <CardFooter>
                  <p>Card Footer</p>
              </CardFooter>
          </Card> */}
        </div>
    </div>
  );
}
