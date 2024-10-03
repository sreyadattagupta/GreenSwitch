import React, { useState } from "react";
import StyledContainer from "./StyledContainer"; // Import styled container
import styled from "styled-components";
import { ethers } from "ethers";

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

const CalculateEmissions = ({ contract, currentAccount }) => {
  const [coefGas, setCoefGas] = useState("");
  const [baselineEmissions, setBaselineEmissions] = useState("");
  const [projectEmissions, setProjectEmissions] = useState("");

  const calculateBaselineEmissions = async () => {
    if (contract) {
      try {
        const result = await contract.calculateBaselineEmissions(
          currentAccount,
          ethers.utils.parseUnits(coefGas, 18)
        );
        setBaselineEmissions(result.toString());
      } catch (error) {
        console.error("Error calculating baseline emissions:", error);
      }
    }
  };

  const calculateProjectEmissions = async () => {
    if (contract) {
      try {
        const result = await contract.calculateProjectEmissions(
          currentAccount,
          ethers.utils.parseUnits(coefGas, 18)
        );
        setProjectEmissions(result.toString());
      } catch (error) {
        console.error("Error calculating project emissions:", error);
      }
    }
  };

  return (
    <StyledContainer>
      <h3>Calculate Emissions</h3>
      <InputField
        type="text"
        placeholder="CO2 Emission Coefficient (COEF)"
        value={coefGas}
        onChange={(e) => setCoefGas(e.target.value)}
      />
      <WalletButton onClick={calculateBaselineEmissions}>Calculate Baseline Emissions</WalletButton>
      <p>Baseline Emissions: {baselineEmissions}</p>

      <WalletButton onClick={calculateProjectEmissions}>Calculate Project Emissions</WalletButton>
      <p>Project Emissions: {projectEmissions}</p>
    </StyledContainer>
  );
};

export default CalculateEmissions;
