import React from "react";
import "./WeekSpecial.css";
import { useState } from "react";
import WeekSpecialBreakfast from "./WeekSpecial/WeekSpecialBreakfast";
import WeekSpecialLunch from "./WeekSpecial/WeekSpecialLunch";
import WeekSpecialDinner from "./WeekSpecial/WeekSpecialDinner";

const WeekSpecial = () => {
  const [bf, setBf] = useState("special-cat");
  const [ln, setLn] = useState("special-cat-lunch");
  const [dn, setDn] = useState("special-cat-dinner");

  // const breakfastFunc = () => {
  //   setBf("special-cat");
  //   setLn("special-cat-lunch");
  //   setDn("special-cat-dinner");
  // };

  const breakfastFunc = () => {
    var w = document.documentElement.clientWidth || window.innerWidth;
    if (w < 750) {
      document.getElementById("visible-breakfast").style.display = "block";
    } else {
      document.getElementById("visible-breakfast").style.display = "flex";
    }
    document.getElementById("visible-lunch").style.display = "none";
    document.getElementById("visible-dinner").style.display = "none";

    document.getElementById("only-bf1").style.color = "#fb5849";
    document.getElementById("only-bf2").style.color = "black";
    document.getElementById("only-bf3").style.color = "black";
  };

  // const lunchFunch = () => {
  //   setBf("special-cat2");
  //   setLn("special-cat-lunch2");
  //   setDn("special-cat-dinner2");
  // };
  const lunchFunc = () => {
    var w = document.documentElement.clientWidth || window.innerWidth;
    if (w < 750) {
      document.getElementById("visible-lunch").style.display = "block";
    } else {
      document.getElementById("visible-lunch").style.display = "flex";
    }
    document.getElementById("visible-breakfast").style.display = "none";
    document.getElementById("visible-dinner").style.display = "none";

    document.getElementById("only-bf1").style.color = "black";
    document.getElementById("only-bf2").style.color = "#fb5849";
    document.getElementById("only-bf3").style.color = "black";
  };

  // const dinnerFunc = () => {
  //   setBf("special-cat3");
  //   setLn("special-cat-lunch3");
  //   setDn("special-cat-dinner3");
  // };
  const dinnerFunc = () => {
    var w = document.documentElement.clientWidth || window.innerWidth;
    if (w < 750) {
      document.getElementById("visible-dinner").style.display = "block";
    } else {
      document.getElementById("visible-dinner").style.display = "flex";
    }
    document.getElementById("visible-breakfast").style.display = "none";
    document.getElementById("visible-lunch").style.display = "none";

    document.getElementById("only-bf1").style.color = "black";
    document.getElementById("only-bf2").style.color = "black";
    document.getElementById("only-bf3").style.color = "#fb5849";
  };

  return (
    <div class="week-special">
      <div class="menu-head">
        <div class="heading">
          <div class="dash-menu">
            <p>
              &#x2015;&#x2015;&#x2015;
              <span id="head-about"> Week Special </span>
              &#x2015;&#x2015;&#x2015;
            </p>
          </div>
          <h1>This Week's Special Offers</h1>
        </div>
      </div>
      <div class="week-icons">
        <ul class="week-food-time">
          <div class="icons-time">
            <li id="weeksBreakfast">
              <div class="logontext" onClick={breakfastFunc}>
                <img src={require("./Images/breakfast.png")} alt="Breakfast" />
                <h3 id="only-bf1">Breakfast</h3>
              </div>
            </li>
            <li id="weeksLunch">
              <div class="logontext" onClick={lunchFunc}>
                <img src={require("./Images/lunch.png")} alt="Lunch" />
                <h3 id="only-bf2">Lunch</h3>
              </div>
            </li>
            <li id="weeksDinner">
              <div class="logontext" onClick={dinnerFunc}>
                <img src={require("./Images/dinner.png")} alt="Dinner" />
                <h3 id="only-bf3">Dinner</h3>
              </div>
            </li>
          </div>
        </ul>
      </div>
      {/* <!-- Breakfast --> */}
      <WeekSpecialBreakfast name={bf} />
      {/* <!-- Lunch --> */}
      <WeekSpecialLunch name={ln} />
      {/* <!-- Dinner --> */}
      <WeekSpecialDinner name={dn} />
    </div>
  );
};

export default WeekSpecial;
