import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AddFuelData from "./AddFuelData";
import CalculateCOEF from "./calculateCOEF";
import CalculateEmissions from "./CalculateEmissions";
import VVBVoting from "./VVBVoting";
import MintCredits from "./MintCredits";
import Navbar from "./Navbar";
import styled from "styled-components";
import { useContract } from "../hooks/useContract";
const ProductWrapper = styled.div`
  background: #767b91;
  color: white;
  min-height: 100vh;
  padding: 6rem 2rem 2rem; /* Increase top padding to avoid overlap */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DataContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 2rem;
  margin: 4rem 0;
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductPage = () => {
  const { contract, currentAccount, connectWallet, disconnectWallet } = useContract();

  return (
    <ProductWrapper>
      <Navbar connectWallet={connectWallet} disconnectWallet={disconnectWallet} currentAccount={currentAccount} />
      {!currentAccount ? (
        <p>Please connect your wallet to access the functionalities.</p>
      ) : (
        <DataContainer>
          <Routes>
            <Route path="/" element={<Navigate to="add-fuel-data" />} />
            <Route path="add-fuel-data" element={<AddFuelData contract={contract} currentAccount={currentAccount} />} />
            <Route path="calculate-coef" element={<CalculateCOEF contract={contract} />} />
            <Route path="calculate-emissions" element={<CalculateEmissions contract={contract} currentAccount={currentAccount} />} />
            <Route path="vvb-voting" element={<VVBVoting contract={contract} currentAccount={currentAccount} />} />
            <Route path="mint-credits" element={<MintCredits contract={contract} currentAccount={currentAccount} />} />
          </Routes>
        </DataContainer>
      )}
    </ProductWrapper>
  );
};

export default ProductPage;
