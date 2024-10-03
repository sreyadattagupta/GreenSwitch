import React from "react";

const MintCredits = ({ contract, currentAccount }) => {
  const mintCredits = async () => {
    if (contract) {
      try {
        const txn = await contract.mintCarbonCredits(currentAccount, 100); // 100 tokens
        await txn.wait();
        alert("Carbon credits minted successfully!");
      } catch (error) {
        console.error("Error minting credits:", error);
      }
    }
  };

  return (
    <div>
      <h3>Mint Carbon Credits</h3>
      <button onClick={mintCredits}>Mint Credits</button>
    </div>
  );
};

export default MintCredits;
