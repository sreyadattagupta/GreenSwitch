# Green Switch: Carbon Credit Issuance Platform

### A decentralized application (DApp) for tracking fuel usage in vehicle fleets, calculating carbon emissions reductions, and converting those reductions into carbon credits using blockchain technology.

---

## Project Overview

This project is built to help vehicle fleet operators switch from gasoline to ethanol fuel and track the carbon emission reductions they achieve. By leveraging blockchain technology, we enable transparency, decentralization, and secure tracking of carbon credits earned from fuel switching.

The DApp interacts with smart contracts deployed on the **Neo X testnet** and supports functionality such as:
- **Adding Fuel Data**: Fleet operators can record their gasoline and ethanol consumption.
- **Calculating CO2 Emission Coefficient (COEF)**: The DApp provides two options for calculating the emission coefficient.
- **Emissions Calculations**: Baseline and project emissions are computed based on fuel usage.
- **Voting Mechanism**: Validators (VVB members) can vote on data submitted by the project proponent. If a majority of votes approve, carbon credits are minted.
- **Minting Carbon Credits**: Upon approval, carbon credits are minted to the project proponent’s address.

The frontend is built using **React**, while **ethers.js** handles the smart contract interactions.

---

## Features

- **Fuel Data Management**: Add and track ethanol and gasoline consumption.
- **Emission Reduction Calculation**: Calculates baseline and project emissions to determine the emission reduction.
- **COEF Calculation**: Calculates the CO2 emission coefficient using two distinct methods.
- **Decentralized Voting**: Validators (VVB members) vote on the legitimacy of submitted data.
- **Mint Carbon Credits**: Mint carbon credits based on the verified fuel data.

---

## Installation Instructions

### Prerequisites

Ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v14+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MetaMask](https://metamask.io/) extension for your browser

### Steps to Set Up the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/fuel-switch-carbon-credits.git
   cd fuel-switch-carbon-credits
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start React Development Server:**
   ```bash
   npm start
   ```
   The project will now be running on http://localhost:3000. You can view it in your browser.
## Usage Guide

### 1. Connecting the Wallet

Once the project is running, you can connect your MetaMask wallet on the **Product Page**. Follow these steps:
1. Open the app in your browser.
2. Click **"Connect Wallet"** on the product page.
3. Ensure that you are connected to the **Neo X testnet** in MetaMask.

### 2. Adding Fuel Data

1. Navigate to the **Add Fuel Data** section.
2. Enter the amount of **Ethanol** and **Gasoline** consumed by your fleet.
3. Submit the data to record it on the blockchain.

### 3. CO2 Emission Coefficient (COEF) Calculation

1. Use **Option A** (Carbon Fraction and Density) or **Option B** (Net Calorific Value and Emission Factor) to calculate COEF.
2. Input the required parameters and click **"Calculate"**.

### 4. Emission Calculations

1. Use the **Baseline Emissions** and **Project Emissions** sections to calculate emissions.
2. Provide the COEF and other relevant parameters to generate emission reductions.

### 5. VVB Voting

1. VVB members can vote on the data submitted by project proponents.
2. Enter the **Project Proponent Address** for whom you are voting.
3. Check the **Approve** box if you support the data submission.
4. Click **"Submit Vote"** to cast your vote.

### 6. Minting Carbon Credits

1. Once the vote is approved by the majority of VVB members, you can mint carbon credits.
2. Navigate to the **Mint Carbon Credits** section.
3. Click **"Mint Credits"** to mint the carbon credits for the project proponent.

---

## Contributing Guidelines

We welcome contributions to improve the Fuel Switch to Carbon Credits DApp. To contribute, please follow these guidelines:

### 1. Fork the Repository
- Go to the repository and click **"Fork"**.

### 2. Clone the Forked Repository
- Clone your forked repository to your local machine.
  ```bash
  git clone https://github.com/your-username/fuel-switch-carbon-credits.git
  ```
### 3. Create a New Branch
- Create a new branch for your feature or bug fix.
  ```bash
  git checkout -b feature/my-new-feature
  ```
### 4. Make Your Changes
- Write and test your code.

### 5. Commit Your Changes
- Commit your changes with a descriptive message.
  ```bash
  git commit -m "Add feature: ability to mint carbon credits"
  ```
### 6. Push to Your Fork
- Push your changes to your forked repository.
  ```bash
  git push origin feature/my-new-feature
  ```
### 7. Submit a Pull Request
- Go to the original repository and submit a **Pull Request**.
- Describe the changes you made and why they should be merged.

---



