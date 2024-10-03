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

const CalculateCOEF = ({ contract }) => {
  const [optionA, setOptionA] = useState({ wC: "", rho: "" });
  const [optionB, setOptionB] = useState({ ncv: "", efCO2: "" });
  const [coefA, setCoefA] = useState("");
  const [coefB, setCoefB] = useState("");

  const calculateCOEFOptionA = async () => {
    if (contract) {
      try {
        const result = await contract.calculateCOEFOptionA(
          ethers.utils.parseUnits(optionA.wC, 18),
          ethers.utils.parseUnits(optionA.rho, 18)
        );
        setCoefA((result/10**36).toString());
      } catch (error) {
        console.error("Error calculating COEF (Option A):", error);
      }
    }
  };

  const calculateCOEFOptionB = async () => {
    if (contract) {
      try {
        const result = await contract.calculateCOEFOptionB(
          ethers.utils.parseUnits(optionB.ncv, 18),
          ethers.utils.parseUnits(optionB.efCO2, 18)
        );
        setCoefB((result/10**18).toString());
      } catch (error) {
        console.error("Error calculating COEF (Option B):", error);
      }
    }
  };

  return (
    <StyledContainer>
      <h3>Calculate COEF</h3>

      <div>
        <h4>Option A (Carbon Fraction and Density)</h4>
        <InputField
          type="text"
          placeholder="wC (Weighted Carbon Fraction)"
          value={optionA.wC}
          onChange={(e) => setOptionA({ ...optionA, wC: e.target.value })}
        />
        <InputField
          type="text"
          placeholder="Density (rho)"
          value={optionA.rho}
          onChange={(e) => setOptionA({ ...optionA, rho: e.target.value })}
        />
        <WalletButton onClick={calculateCOEFOptionA}>Calculate COEF (Option A)</WalletButton>
        <p>COEF (Option A): {coefA}</p>
      </div>

      <div>
        <h4>Option B (NCV and CO2 Emission Factor)</h4>
        <InputField
          type="text"
          placeholder="NCV (Net Calorific Value)"
          value={optionB.ncv}
          onChange={(e) => setOptionB({ ...optionB, ncv: e.target.value })}
        />
        <InputField
          type="text"
          placeholder="EF CO2 (Emission Factor)"
          value={optionB.efCO2}
          onChange={(e) => setOptionB({ ...optionB, efCO2: e.target.value })}
        />
        <WalletButton onClick={calculateCOEFOptionB}>Calculate COEF (Option B)</WalletButton>
        <p>COEF (Option B): {coefB}</p>
      </div>
    </StyledContainer>
  );
};

export default CalculateCOEF;
