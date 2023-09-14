"use client";
import React, { useEffect, useState } from "react";

import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import nftAbi from "@/nft.json";
import StyledButton from "../ui/StyledButton";
import { ethers } from 'ethers';

import { setNftBalances } from '@/redux/features/nftBalancesOfSlice'
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useToast } from "@/components/ui/use-toast"
import { setNftMaxSupply } from "@/redux/features/nftMaxSupplySlice";
import { setNftTotalMinted } from "@/redux/features/nftTotalMintedSlice";
import {create} from 'ipfs-http-client';
import { setNftName } from "@/redux/features/nftNameSlice";
import { setNftImage } from "@/redux/features/nftImageSlice";
import { setNftDescription } from "@/redux/features/nftDescriptionSlice";
import MintButtonModal from "../ui/MintButton";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { CardDescription} from "../ui/card";



const MintSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast()
  const { address } = useAccount();
  const balanceOf = useAppSelector((state) => state.nftsBalancesOf.balancesOf);
  const maxSupply = useAppSelector((state) => state.nftMaxSupply.maxSupply);
  const totalMinted = useAppSelector((state) => state.nftTotalMinted.totalMinted);
  const [buttonLoading, setButtonLoad] = useState(false)
  const ipfs = create({ host: 'ipfs.io', port: 443, protocol: 'https' });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchFromIPFS = async () => {
    let totalMint = totalMinted; 
    const income = Number(totalMint) + 1;
    if(totalMinted) {
    try {
      const cid = `QmXzSw8616AGdDvJDg15dBWdYdt3tzdxoW8jwTzHrRu77w/${income}.json`; // Replace with the CID of the metadata you want to fetch from IPFS
      const metadataChunks = [];

      for await (const chunk of ipfs.cat(cid)) {
        metadataChunks.push(chunk);
      }

      // Concatenate the chunks into a single Uint8Array
      const metadataUint8Array = new Uint8Array(metadataChunks.reduce((acc, chunk) => {
        const newAcc = new Uint8Array(acc.length + chunk.length);
        newAcc.set(acc, 0);
        newAcc.set(chunk, acc.length);
        return newAcc;
      }, new Uint8Array(0)));

      const metadataString = new TextDecoder().decode(metadataUint8Array);
      const metadataObject = JSON.parse(metadataString);
      // console.log(metadataObject.name)
      dispatch(setNftName(metadataObject.name))
      dispatch(setNftImage(metadataObject.image))
      dispatch(setNftDescription(metadataObject.description))
    } catch (error) {
      // setError('Error fetching metadata from IPFS: ' + error.message);
    }
    }
  };

  const { data, isSuccess, isLoading, isError, refetch } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT,
    abi: nftAbi,
    functionName: "balanceOf",
    args: [address],
  });

  const { data: maxSupplyData, isSuccess: maxSupplySuccess, isLoading: maxSupplyLoading, refetch: maxSupplyRefetch } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT,
    abi: nftAbi,
    functionName: "maxSupply",
    args: [],
  });

  const { data: hasMintedData, isSuccess: hasMintedSuccess, isLoading: hasMintedLoading, refetch: hasMintedRefetch } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT,
    abi: nftAbi,
    functionName: "totalSupply",
    args: [],
  });

  const { data: writeData, isError: writeError, write } = useContractWrite({
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT,
    abi: nftAbi,
    functionName: "mint",
    account: address,
  });
  const slicedDataFirstPart = writeData?.hash.slice(0, 10);
        const slicedDataSecondPart = writeData?.hash.slice(-10);
      const message = (
        <>
          <a href={`https://testnet.bscscan.com/tx/${writeData?.hash}`} target="_blank" rel="noopener noreferrer">
          {slicedDataFirstPart}..{slicedDataSecondPart}
          </a>
        </>
      );
  useWaitForTransaction({
    hash: writeData?.hash,
    onSuccess() {
      refetch();
      maxSupplyRefetch();
      hasMintedRefetch();
      setButtonLoad(false)
      toast({
        title: "Transaction Success",
        description: message,
      })
    }
  });
  const mintingCostInEth = 1000000000
  const mintingCostInWei = ethers.parseUnits(mintingCostInEth.toString(), 'wei');
  
  useEffect(() => {
    const nftBalance = data as string;
    if(nftBalance)
    {
        dispatch(setNftBalances(nftBalance.toString()))
        }else{
        const zero = 0;
        dispatch(setNftBalances(zero.toString()))
    }
    const maxSup = maxSupplyData as string;
    const hasmint = hasMintedData as string;
    dispatch(setNftMaxSupply(maxSup.toString()))
    dispatch(setNftTotalMinted(hasmint.toString()))
    fetchFromIPFS();
  }, [address, balanceOf, data, dispatch, fetchFromIPFS, hasMintedData, maxSupplyData])

  // console.log('balances', balanceOf)
  // console.log('max supply', maxSupply)
  // console.log('total minted', totalMinted)
  

  const handleMint = async () => {
    console.log(process.env.NEXT_PUBLIC_NFT_CONTRACT)
    write({
      args: [],
      value: mintingCostInWei,
    });
    setButtonLoad(true)
  };
  
  return (
    <div className="h-full mt-4 lg:flex lg:flex-col lg:justify-evenly lg:items-center">
      <CardDescription>
      <p>
        Max Supply:{" "}
        {!maxSupply && <span className="font-semibold">loading...</span>}
        {maxSupply && (maxSupplyData as any).toString()}
      </p>
      <p>
        Has Minted:{" "}
        {!totalMinted && <span className="font-semibold">loading...</span>}
        {totalMinted && (hasMintedData as any).toString()}
      </p>
      {address && 
      <p>
        Your Balance:{" "}
        {!balanceOf && <span className="font-semibold">loading...</span>}
        {balanceOf && (balanceOf as any).toString()}
      </p>
      }
      </CardDescription>
      <div className="flex justify-center items-center mt-100">
        { !buttonLoading &&
        <Button color="red" onClick={handleMint}>
          Mint
        </Button>
        }
        {buttonLoading &&
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
        }
      </div>
    </div>
  );
};

export default MintSection;