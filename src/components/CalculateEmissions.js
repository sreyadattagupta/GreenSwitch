import React, { useState } from "react";
import { ethers } from "ethers";


const CalculateEmissions = ({ contract, currentAccount }) => {
  const [coefGas, setCoefGas] = useState("");
  const [baselineEmissions, setBaselineEmissions] = useState("");
  const [projectEmissions, setProjectEmissions] = useState("");

  const calculateBaselineEmissions = async () => {
    if (contract) {
      try {
        const result = await contract.calculateBaselineEmissions(
          currentAccount,
          ethers.utils.parseUnits(coefGas, 18)
        );
        setBaselineEmissions(result.toString());
      } catch (error) {
        console.error("Error calculating baseline emissions:", error);
      }
    }
  };

  const calculateProjectEmissions = async () => {
    if (contract) {
      try {
        const result = await contract.calculateProjectEmissions(
          currentAccount,
          ethers.utils.parseUnits(coefGas, 18)
        );
        setProjectEmissions(result.toString());
      } catch (error) {
        console.error("Error calculating project emissions:", error);
      }
    }
  };

  return (
    <div>
      <h3>Calculate Emissions</h3>
      <input
        type="text"
        placeholder="CO2 Emission Coefficient (COEF)"
        value={coefGas}
        onChange={(e) => setCoefGas(e.target.value)}
      />
      <button onClick={calculateBaselineEmissions}>Calculate Baseline Emissions</button>
      <p>Baseline Emissions: {baselineEmissions}</p>

      <button onClick={calculateProjectEmissions}>Calculate Project Emissions</button>
      <p>Project Emissions: {projectEmissions}</p>
    </div>
  );
};

export default CalculateEmissions;
