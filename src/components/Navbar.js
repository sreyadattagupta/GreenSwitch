import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 10px;
`;

const WalletButton = styled.button`
  background: linear-gradient(45deg, #6d00ff, #00ffcc);
  border: none;
  border-radius: 20px;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 1rem;

  &:hover {
    background: linear-gradient(45deg, #00ffcc, #6d00ff);
  }
`;

const Navbar = ({ connectWallet, disconnectWallet, currentAccount }) => {
  return (
    <NavbarContainer>
      <h1>Green Switch</h1>
      <div>
        {currentAccount ? (
          <>
            <span>Connected: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}</span>
            <WalletButton onClick={disconnectWallet}>Disconnect</WalletButton>
          </>
        ) : (
          <WalletButton onClick={connectWallet}>Connect Wallet</WalletButton>
        )}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
