import React from "react";
import { useContract } from "../hooks/useContract";
import AddFuelData from "./AddFuelData";
import CalculateCOEF from "./calculateCOEF";
import CalculateEmissions from "./CalculateEmissions";
import VVBVoting from "./VVBVoting";
import MintCredits from "./MintCredits";
import styled from "styled-components";

const ProductWrapper = styled.div`
  background: #0d0d0d;
  color: white;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConnectButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #6d00ff, #00ffcc);
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const ProductPage = () => {
  const { contract, currentAccount, connectWallet } = useContract();

  return (
    <ProductWrapper>
      <h1>Explore Our Decentralized Fuel Switch Project</h1>
      {!currentAccount ? (
        <ConnectButton onClick={connectWallet}>Connect Wallet</ConnectButton>
      ) : (
        <>
          <p>Connected as: {currentAccount}</p>
          <AddFuelData contract={contract} currentAccount={currentAccount} />
          <CalculateCOEF contract={contract} />
          <CalculateEmissions contract={contract} currentAccount={currentAccount} />
          <VVBVoting contract={contract} currentAccount={currentAccount} />
          <MintCredits contract={contract} currentAccount={currentAccount} />
        </>
      )}
    </ProductWrapper>
  );
};

export default ProductPage;
