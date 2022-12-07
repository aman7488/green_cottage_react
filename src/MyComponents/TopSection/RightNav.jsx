import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 35px 20px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538e1;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    a:visited, a{
        color:#fff;
    }
    a:hover{
        color: coral;
    }
  }
  padding-right: 50px;
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li id="i1">
            <a href="#jump-to-home">Home</a>
          </li>
          <li id="i2">
            <a href="#jump-to-about">About</a>
          </li>
          <li id="i3">
            <a href="#jump-to-menu">Menu</a>
          </li>
          <li id="i4">
            <a href="#jump-to-chefs">Chefs</a>
          </li>
          <li id="i5">
            <a href="#jump-to-footer">Contact Us</a>
          </li>
    </Ul>
  )
}

export default RightNav