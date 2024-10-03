import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

// Styled components for the homepage
const HomepageWrapper = styled.div`
  background: black;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  animation: glow 2s infinite alternate;

  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #0fa, 0 0 30px #0fa, 0 0 40px #0fa;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #0fa, 0 0 40px #0fa, 0 0 50px #0fa;
    }
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  text-align: center;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%);
  border: none;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  border-radius: 50px;
  animation: pulse 1.5s infinite alternate;

  @keyframes pulse {
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
  }
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background: url('/space_background.jpg') no-repeat center center/cover;
  opacity: 0.4;
`;



const Homepage = () => {
  useEffect(() => {
    gsap.fromTo("h1", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5 });
    gsap.fromTo("p", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5 });
  }, []);

  return (
    <HomepageWrapper>
      <BackgroundAnimation />
      {/* <Stars /> */}
      {/* <Planet /> */}
      <Title>Green Switch: A Carbon Credit Issuance Platform</Title>
      <Description>
        A decentralized solution implementing Verra VM0019 methodology to issue carbon credits using decentaralized voting for projects based on Conversion from Ethanol to Gasoline Flex Fuel Vehicles.
        Explore our project to learn how we're contributing to a greener planet!
      </Description>
      <CTAButton to="/product">Explore Now</CTAButton>
    </HomepageWrapper>
  );
};

export default Homepage;
