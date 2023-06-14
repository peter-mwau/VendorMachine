"use client";

import React, { useState } from 'react';
import { render } from 'react-dom';
import Web3 from 'web3';

const vendingmachine = () => {
  const [error, setError] = useState("")

  let web3
  //window.ethereum
  const connectHandlerWallet = async () => {
     if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
      try{
        await window.ethereum.request({method: "eth_requestAccounts"})
        web3 = new Web3(window.ethereum)
      }catch(error) {
        setError(error.message)
    }
  }else {
    setError("Metamask not found, Please Install!!")
    }
  };

  return (
    <main className="bg-white h-[100vh]">
      <h1 className="mx-auto bottom-1 bg-green-600 text-black space-x-6 font-bold p-3 text-center justify-center text-2xl uppercase">
        Vending Machine
      </h1>

      <div className="flex flex-row">
        <button
        onClick={connectHandlerWallet}
          className="bg-green-400 text-black p-2 mt-3 flex-end items-end justify-end mx-auto mr-2 rounded-md hover:bg-gray-500 hover:text-white"
        >
          Connect Wallet
        </button>
      </div>

      <div>
        <p className="m-2 text-2xl text-red-600">{error}</p>
      </div>
    </main>
  );
};

export default vendingmachine;