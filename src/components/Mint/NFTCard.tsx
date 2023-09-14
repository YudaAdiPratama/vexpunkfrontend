
import dynamic from "next/dynamic";
import Image from 'next/image';
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAppSelector } from "@/redux/store";
import { Skeleton } from "@/components/ui/skeleton";
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
        {!nftImage && 
        <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        </div>
        </div>
      }
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