import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './assets/logo192.jpg';

const NavbarContainer = styled.nav`
  width: 100%;
  background: rgba(0, 0, 0, 0.8); /* Dark background */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9); /* Slight darkening on hover */
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 40px;
    margin-right: 10px;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #00ffcc;
    text-transform: uppercase;
    letter-spacing: 1px;
    animation: glow 1.5s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc;
    }
    to {
      text-shadow: 0 0 20px #00ffcc, 0 0 30px #00ffcc, 0 0 40px #00ffcc;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    margin: 0 1rem;
    position: relative;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s ease;

    &:hover {
      color: #00ffcc;
    }
  }

  .active {
    color: #00ffcc;
    position: relative;
  }

  .active::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -10px;
    height: 3px;
    background-color: #00ffcc;
    animation: slide-in 0.4s ease;
  }

  @keyframes slide-in {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const WalletSection = styled.div`
  display: flex;
  align-items: center;
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
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #00ffcc, #6d00ff);
    transform: scale(1.1); /* Slight grow effect on hover */
    box-shadow: 0 0 20px #00ffcc;
  }
`;

const Navbar = ({ connectWallet, disconnectWallet, currentAccount }) => {
  return (
    <NavbarContainer>
        <Link to="/">
      <LogoContainer>
        <img src={logo} alt="Logo" />
        <p>Green Switch</p>
      </LogoContainer>
        </Link>
      <Menu>
        <li>
          <Link to="add-fuel-data">Add Fuel Data</Link>
        </li>
        <li>
          <Link to="calculate-coef">Calculate COEF</Link>
        </li>
        <li>
          <Link to="calculate-emissions">Calculate Emissions</Link>
        </li>
        <li>
          <Link to="vvb-voting">VVB Voting</Link>
        </li>
        <li>
          <Link to="mint-credits">Mint Credits</Link>
        </li>
      </Menu>

      <WalletSection>
        {currentAccount ? (
          <>
            <span>
              Connected: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}
            </span>
            <WalletButton onClick={disconnectWallet}>Disconnect</WalletButton>
          </>
        ) : (
          <WalletButton onClick={connectWallet}>Connect Wallet</WalletButton>
        )}
      </WalletSection>
    </NavbarContainer>
  );
};

export default Navbar;
