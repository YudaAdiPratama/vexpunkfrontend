"use client";
import React, { useEffect } from "react";

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


const MintSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast()
  const { address } = useAccount();
  const balanceOf = useAppSelector((state) => state.nftsBalancesOf.balancesOf);
  const maxSupply = useAppSelector((state) => state.nftMaxSupply.maxSupply);
  const totalMinted = useAppSelector((state) => state.nftTotalMinted.totalMinted);
  const { data, isSuccess, isLoading, refetch } = useContractRead({
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

  const { data: writeData, write } = useContractWrite({
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT,
    abi: nftAbi,
    functionName: "mint",
    account: address,
  });
  useWaitForTransaction({
    hash: writeData?.hash,
    onSuccess() {
      refetch();
      maxSupplyRefetch();
      hasMintedRefetch();
    },
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
  }, [address, balanceOf, data, dispatch, hasMintedData, maxSupplyData])

  console.log('balances', balanceOf)
  console.log('max supply', maxSupply)
  console.log('total minted', totalMinted)
  

  const handleMint = async () => {
    console.log(process.env.NEXT_PUBLIC_NFT_CONTRACT)
    write({
      args: [],
      value: mintingCostInWei,
    });
  };

  console.log(mintingCostInWei)
  return (
    <div className="h-full mt-4 lg:flex lg:flex-col lg:justify-evenly lg:items-center">
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
      <div className="flex justify-center items-center mt-100">
        <StyledButton color="pink" onClick={handleMint}>
          Mint
        </StyledButton>
        <StyledButton color="pink" onClick={() => {toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
              })}}>
          TEST
        </StyledButton>
      </div>
    </div>
  );
};

export default MintSection;