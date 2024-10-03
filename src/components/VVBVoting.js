import React, { useState } from "react";
import styled from "styled-components";

const VotingContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem 0;
  width: 100%;
  max-width: 600px;
`;

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
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(45deg, #00ffcc, #6d00ff);
  }
`;

const VVBVoting = ({ contract }) => {
  const [projectProponent, setProjectProponent] = useState(""); // Input for project proponent's address
  const [approval, setApproval] = useState(false);

  const submitVote = async () => {
    if (contract && projectProponent) {
      try {
        const txn = await contract.submitVote(projectProponent, approval);
        await txn.wait();
        alert("Vote submitted successfully!");
      } catch (error) {
        console.error("Error submitting vote:", error);
      }
    } else {
      alert("Please enter a valid project proponent address.");
    }
  };

  return (
    <VotingContainer>
      <h3>VVB Voting</h3>
      <InputField
        type="text"
        placeholder="Project Proponent Address"
        value={projectProponent}
        onChange={(e) => setProjectProponent(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={approval}
          onChange={(e) => setApproval(e.target.checked)}
        />
        Approve?
      </label>
      <WalletButton onClick={submitVote}>Submit Vote</WalletButton>
    </VotingContainer>
  );
};

export default VVBVoting;
