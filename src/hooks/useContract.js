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
    // Check if MetaMask's `ethereum` object exists in the browser
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        // Request accounts from MetaMask
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        
        if (accounts.length > 0) {
          const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
          const tempSigner = tempProvider.getSigner(accounts[0]); // Use the first account selected
          const tempContract = new ethers.Contract(fuelSwitchAddress, fuelSwitchABI, tempSigner);
  
          // Set provider, signer, and contract in state
          setProvider(tempProvider);
          setSigner(tempSigner);
          setContract(tempContract);
  
          // Get the selected account's address
          const address = await tempSigner.getAddress();
          setCurrentAccount(address);
          console.log("Connected Account:", address);
        }
      } catch (error) {
        console.error("Error connecting to MetaMask wallet:", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  };
  
  

  useEffect(() => {
    connectWallet();
  }, []);

  return { provider, signer, contract, currentAccount, connectWallet };
};
