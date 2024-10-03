import React, { useState } from "react";

const VVBVoting = ({ contract, currentAccount }) => {
  const [approval, setApproval] = useState(false);

  const submitVote = async () => {
    if (contract) {
      try {
        const txn = await contract.submitVote(currentAccount, approval);
        await txn.wait();
        alert("Vote submitted successfully!");
      } catch (error) {
        console.error("Error submitting vote:", error);
      }
    }
  };

  return (
    <div>
      <h3>VVB Voting</h3>
      <label>
        <input
          type="checkbox"
          checked={approval}
          onChange={(e) => setApproval(e.target.checked)}
        />
        Approve?
      </label>
      <button onClick={submitVote}>Submit Vote</button>
    </div>
  );
};

export default VVBVoting;
