import React from "react";
import { useContract } from "../hooks/useContract";
import AddFuelData from "./AddFuelData";
import CalculateCOEF from "./calculateCOEF";
import CalculateEmissions from "./CalculateEmissions";
import VVBVoting from "./VVBVoting";
import MintCredits from "./MintCredits";
import Navbar from "./Navbar";
import styled from "styled-components";

const ProductWrapper = styled.div`
  background: #767B91;
  color: white;
  min-height: 100vh;
  padding: 5rem 2rem 2rem; /* Add padding to avoid overlap with navbar */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DataContainer = styled.div`
  background: rgba(255, 255, 255, 0.1); /* Transparent background */
  border-radius: 10px; /* Rounded corners */
  padding: 2rem; /* Padding for the content */
  margin: 1rem 0; /* Margin for spacing */
  width: 100%; /* Full width */
  max-width: 1000px; /* Maximum width for larger screens */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Shadow for depth */
  display: flex; /* Use flexbox for alignment */
  flex-direction: column; /* Stack components vertically */
  align-items: center; /* Center align items horizontally */
`;

const ProductPage = () => {
  const { contract, currentAccount, connectWallet, disconnectWallet } = useContract();

  return (
    <ProductWrapper>
      <Navbar connectWallet={connectWallet} disconnectWallet={disconnectWallet} currentAccount={currentAccount} />
      <h1>Explore Our Decentralized Fuel Switch Project</h1>
      {!currentAccount ? (
        <p>Please connect your wallet to access the functionalities.</p>
      ) : (
        <DataContainer>
          <AddFuelData contract={contract} currentAccount={currentAccount} />
          <CalculateCOEF contract={contract} />
          <CalculateEmissions contract={contract} currentAccount={currentAccount} />
          <VVBVoting contract={contract} currentAccount={currentAccount} />
          <MintCredits contract={contract} currentAccount={currentAccount} />
        </DataContainer>
      )}
    </ProductWrapper>
  );
};

export default ProductPage;
