
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


const MintSection = dynamic(
  () => import("./MintSection"),
  { ssr: false }
)

export const NFTCard = () => {
  const nftName = useAppSelector((state) => state.nftName.nftName);
  const nftImage = useAppSelector((state) => state.nftImage.nftImage);

  const imageUri = nftImage.replace('ipfs://', 'https://ipfs.io/ipfs/');
  return (
    <Card className="w-[350px]">
      <CardHeader>
      <CardTitle className="text-xl font-bold text-gray-400">{nftName}</CardTitle>
      </CardHeader>
      <CardContent>
      {imageUri &&
      <Image 
      width={200}
      height={200} 
      src={imageUri} 
      alt="NFT" />
    }
      <MintSection />
      </CardContent>
    </Card>
  );
};