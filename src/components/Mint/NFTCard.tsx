
import dynamic from "next/dynamic";
import Image from 'next/image';
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAppSelector } from "@/redux/store";
import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";


const MintSection = dynamic(
  () => import("./MintSection"),
  { ssr: false }
)

export const NFTCard = () => {
  const nftName = useAppSelector((state) => state.nftName.nftName);
  const nftImage = useAppSelector((state) => state.nftImage.nftImage);

  const imageUri = nftImage.replace('ipfs://', 'https://ipfs.io/ipfs/');
  return (
    <Card >
      <CardHeader>
        <ModeToggle />
      <CardTitle className="text-xl font-bold text-gray-400">{nftName}</CardTitle>
      </CardHeader>
      <CardContent>
      <div className="h-48 mb-4 flex items-center justify-center">
      {imageUri &&
      <Image 
      width={200}
      height={200} 
      src={imageUri} 
      alt="NFT" />
    }
    </div>
      <MintSection />
      </CardContent>
    </Card>
  );
};