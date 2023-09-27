import React from 'react';
import styled from 'styled-components';

// Define a styled component for the navbar container
const NavbarContainer = styled.nav`
  background-color: #1E633f;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 70px;
  position: fixed; /* Add position: fixed to make it fixed */
  top: 0; /* Attach it to the top of the viewport */
  left: 0; /* Attach it to the left of the viewport */
  right: 0; /* Attach it to the right of the viewport */
  z-index: 1000; /* Ensure it appears above other content */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;


// Define styled components for the links in the navbar
const LeftNavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
`;

const RightNavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const NavLinkItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    color: #ff6600; /* Change the color on hover */
  }
`;

const CartIcon = styled.i`
  /* Add styles for your cart icon, e.g., font-size, color */
  margin-right: 25px;
  font-size: 23px;
`;

const Name = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  width: 75px; /* Set the width of the logo image */
`;

function Navbar() {
  return (
    <NavbarContainer>
      <LeftNavLinks>
        <NavLinkItem>
          <LogoImage src="https://reeco.io/assets/logo.44b75468.svg" alt="Logo" />
        </NavLinkItem>
        <NavLinkItem>
          <NavLink href="#">Store</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink href="#">Orders</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink href="#">Analytics</NavLink>
        </NavLinkItem>
      </LeftNavLinks>
      <RightNavContent>
        <CartIcon className="fa fa-shopping-cart" aria-hidden="true" /> {/* Example cart icon */}
        <Name>
          <div>Hello, James</div>
          <div>&#9660;</div> {/* Down arrow */}
        </Name>
      </RightNavContent>
    </NavbarContainer>
  );
}

export default Navbar;


