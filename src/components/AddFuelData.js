import React, { useState } from "react";
import { ethers } from "ethers"; 
import StyledContainer from "./StyledContainer"; 
import styled from "styled-components";

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: white;

  &:focus {
    outline: none;
    border-color: #00ffcc; /* Highlight border on focus */
  }
`;

const WalletButton = styled.button`
  background: linear-gradient(45deg, #6d00ff, #00ffcc);
  border: none;
  border-radius: 20px;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background: linear-gradient(45deg, #00ffcc, #6d00ff);
  }
`;

const AddFuelData = ({ contract, currentAccount }) => {
  const [ethanolConsumption, setEthanolConsumption] = useState("");
  const [gasolineConsumption, setGasolineConsumption] = useState("");
  const [fleetOwnerAddress, setFleetOwnerAddress] = useState(""); 

  const addFuelData = async () => {
    if (contract && fleetOwnerAddress) {
      try {
        const txn = await contract.addFuelData(
          fleetOwnerAddress, // Pass the fleet owner address
          ethers.utils.parseUnits(ethanolConsumption, 18),
          ethers.utils.parseUnits(gasolineConsumption, 18)
        );
        await txn.wait();
        alert("Fuel data added successfully!");
      } catch (error) {
        console.error("Error adding fuel data:", error);
      }
    } else {
      alert("Please fill in all fields and provide a valid fleet owner address.");
    }
  };

  return (
    <StyledContainer>
      <h3>Add Fuel Data</h3>
      <InputField
        type="text"
        placeholder="Fleet Owner Address"
        value={fleetOwnerAddress}
        onChange={(e) => setFleetOwnerAddress(e.target.value)} 
      />
      <InputField
        type="text"
        placeholder="Ethanol Consumption (liters)"
        value={ethanolConsumption}
        onChange={(e) => setEthanolConsumption(e.target.value)}
      />
      <InputField
        type="text"
        placeholder="Gasoline Consumption (liters)"
        value={gasolineConsumption}
        onChange={(e) => setGasolineConsumption(e.target.value)}
      />
      <WalletButton onClick={addFuelData}>Submit Fuel Data</WalletButton>
    </StyledContainer>
  );
};

export default AddFuelData;
