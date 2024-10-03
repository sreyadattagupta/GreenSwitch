import React from "react";
import StyledContainer from "./StyledContainer"; // Import styled container
import styled from "styled-components";

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

const MintCredits = ({ contract, currentAccount }) => {
  const mintCredits = async () => {
    if (contract) {
      try {
        const txn = await contract.mintCarbonCredits(currentAccount, 100); // 100 tokens as an example
        await txn.wait();
        alert("Carbon credits minted successfully!");
      } catch (error) {
        console.error("Error minting credits:", error);
      }
    }
  };

  return (
    <StyledContainer>
      <h3>Mint Carbon Credits</h3>
      <WalletButton onClick={mintCredits}>Mint Credits</WalletButton>
    </StyledContainer>
  );
};

export default MintCredits;
