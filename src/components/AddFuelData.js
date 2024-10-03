import React, { useState } from "react";
import { ethers } from "ethers";


const AddFuelData = ({ contract, currentAccount }) => {
  const [ethanolConsumption, setEthanolConsumption] = useState("");
  const [gasolineConsumption, setGasolineConsumption] = useState("");

  const addFuelData = async () => {
    if (contract) {
      try {
        const txn = await contract.addFuelData(
          currentAccount,
          ethers.utils.parseUnits(ethanolConsumption, 18),
          ethers.utils.parseUnits(gasolineConsumption, 18)
        );
        await txn.wait();
        alert("Fuel data added successfully!");
      } catch (error) {
        console.error("Error adding fuel data:", error);
      }
    }
  };

  return (
    <div>
      <h3>Add Fuel Data</h3>
      <input
        type="text"
        placeholder="Ethanol Consumption (liters)"
        value={ethanolConsumption}
        onChange={(e) => setEthanolConsumption(e.target.value)}
      />
      <input
        type="text"
        placeholder="Gasoline Consumption (liters)"
        value={gasolineConsumption}
        onChange={(e) => setGasolineConsumption(e.target.value)}
      />
      <button onClick={addFuelData}>Submit Fuel Data</button>
    </div>
  );
};

export default AddFuelData;
