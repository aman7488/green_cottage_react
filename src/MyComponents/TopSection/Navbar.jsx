import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
// import './Navbar.css';

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  border-bottom: 20px solid #ffffff;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <a href="App.js">
          <img
            src={require("../Images/logo.png")}
            alt="logo"
            width="100"
            height="70"
          />
        </a>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar