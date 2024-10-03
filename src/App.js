import React from "react";
import { useContract } from "./hooks/useContract";
import AddFuelData from "./components/AddFuelData";
import CalculateCOEF from "./components/calculateCOEF";
import CalculateEmissions from "./components/CalculateEmissions";
import VVBVoting from "./components/VVBVoting";
import MintCredits from "./components/MintCredits";

const App = () => {
  const { contract, currentAccount, connectWallet } = useContract();

  return (
    <div className="App">
      <h1>Fuel Switch Carbon Credits DApp</h1>
      <p>Connected Account: {currentAccount || "Not connected"}</p>
      <button onClick={connectWallet}>Connect Wallet</button>

      {currentAccount && contract && (
        <>
          <AddFuelData contract={contract} currentAccount={currentAccount} />
          <CalculateCOEF contract={contract} />
          <CalculateEmissions contract={contract} currentAccount={currentAccount} />
          <VVBVoting contract={contract} currentAccount={currentAccount} />
          <MintCredits contract={contract} currentAccount={currentAccount} />
        </>
      )}
    </div>
  );
};

export default App;
