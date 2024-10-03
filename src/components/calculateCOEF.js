import React, { useState } from "react";
import { ethers } from "ethers";


const CalculateCOEF = ({ contract }) => {
  const [optionA, setOptionA] = useState({ wC: "", rho: "" });
  const [optionB, setOptionB] = useState({ ncv: "", efCO2: "" });
  const [coefA, setCoefA] = useState("");
  const [coefB, setCoefB] = useState("");

  const calculateCOEFOptionA = async () => {
    if (contract) {
      try {
        const result = await contract.calculateCOEFOptionA(
          ethers.utils.parseUnits(optionA.wC, 18),
          ethers.utils.parseUnits(optionA.rho, 18)
        );
        setCoefA(result.toString());
      } catch (error) {
        console.error("Error calculating COEF (Option A):", error);
      }
    }
  };

  const calculateCOEFOptionB = async () => {
    if (contract) {
      try {
        const result = await contract.calculateCOEFOptionB(
          ethers.utils.parseUnits(optionB.ncv, 18),
          ethers.utils.parseUnits(optionB.efCO2, 18)
        );
        setCoefB(result.toString());
      } catch (error) {
        console.error("Error calculating COEF (Option B):", error);
      }
    }
  };

  return (
    <div>
      <h3>Calculate COEF</h3>

      <div>
        <h4>Option A (Carbon Fraction and Density)</h4>
        <input
          type="text"
          placeholder="wC (Weighted Carbon Fraction)"
          value={optionA.wC}
          onChange={(e) => setOptionA({ ...optionA, wC: e.target.value })}
        />
        <input
          type="text"
          placeholder="Density (rho)"
          value={optionA.rho}
          onChange={(e) => setOptionA({ ...optionA, rho: e.target.value })}
        />
        <button onClick={calculateCOEFOptionA}>Calculate COEF (Option A)</button>
        <p>COEF (Option A): {coefA}</p>
      </div>

      <div>
        <h4>Option B (NCV and CO2 Emission Factor)</h4>
        <input
          type="text"
          placeholder="NCV (Net Calorific Value)"
          value={optionB.ncv}
          onChange={(e) => setOptionB({ ...optionB, ncv: e.target.value })}
        />
        <input
          type="text"
          placeholder="EF CO2 (Emission Factor)"
          value={optionB.efCO2}
          onChange={(e) => setOptionB({ ...optionB, efCO2: e.target.value })}
        />
        <button onClick={calculateCOEFOptionB}>Calculate COEF (Option B)</button>
        <p>COEF (Option B): {coefB}</p>
      </div>
    </div>
  );
};

export default CalculateCOEF;
