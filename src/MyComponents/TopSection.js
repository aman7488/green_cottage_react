import React from "react";
import "./TopSection.css";
import SlideShow from "./TopSection/SlideShow";
import { SliderData } from "./TopSection/SliderData";
import Navbar from "./TopSection/Navbar";

const topSection = () => {
  return (
    <div className="topSection">
      <Navbar />
      {/* <div className="navbar">
        <a href="App.js">
          <img
            src={require("./Images/logo.png")}
            alt="logo"
            width="100"
            height="70"
          />
        </a>

        <Navbar />
        <ul className="primary-nav">
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
        </ul>
      </div> */}

      <div className="header">
        <div className="itemx1">
          <ul className="headtext" id="jump-to-home">
            <h1 id="head1">Green Cottage</h1>
            <h2 id="head2">Eat your Cravings</h2>
            <a href="#" id="reservation_link">
              <h3 id="head3">Make a Reservation</h3>
            </a>
          </ul>
        </div>

        <div className="itemx2">
          <ul>
            <SlideShow slides={SliderData} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default topSection;
