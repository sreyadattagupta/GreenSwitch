import { useState, useEffect } from "react";
import { ethers } from "ethers";
import fuelSwitchABI from "../contracts/FuelSwitchCarbonCredits.json";
import { fuelSwitchAddress } from "../contracts/config";

export const useContract = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        const tempSigner = tempProvider.getSigner();
        const tempContract = new ethers.Contract(fuelSwitchAddress, fuelSwitchABI, tempSigner);

        setProvider(tempProvider);
        setSigner(tempSigner);
        setContract(tempContract);

        const address = await tempSigner.getAddress();
        setCurrentAccount(address);
        console.log("Connected Account:", address);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  };

  const disconnectWallet = () => {
    setCurrentAccount("");  // Clear the current account
    setProvider(null);      // Clear the provider
    setSigner(null);        // Clear the signer
    setContract(null);      // Clear the contract
    console.log("Disconnected");
  };

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length) {
          const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
          const tempSigner = tempProvider.getSigner();
          const tempContract = new ethers.Contract(fuelSwitchAddress, fuelSwitchABI, tempSigner);

          setProvider(tempProvider);
          setSigner(tempSigner);
          setContract(tempContract);
          setCurrentAccount(accounts[0]);
        }
      }
    };

    checkIfWalletIsConnected(); // Check if wallet is already connected on load
  }, []);

  return { provider, signer, contract, currentAccount, connectWallet, disconnectWallet };
};
