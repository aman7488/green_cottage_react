import React from "react";

const WeekSpecialLunch = (props) => {
  return (
    <div className={props.name} id="visible-lunch">
      <div className="left-special">
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item3.jpg")} alt="Pic" />
              <p>
                <b>Lunch Type1</b>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="special-price">
                <h3>$12</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item4.jpg")} alt="Pic" />
              <p>
                <b>Lunch Type2</b>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="special-price">
                <h3>$18</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item3.jpg")} alt="Pic" />
              <p>
                <b>Lunch Type3</b>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="special-price">
                <h3>$12</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-special">
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item4.jpg")} alt="Pic" />
              <p>
                <b>Lunch Type4</b>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="special-price">
                <h3>$18</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item3.jpg")} alt="Pic" />
              <p>
                <b>Lunch Type5</b>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="special-price">
                <h3>$12</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item4.jpg")} alt="Pic" />
              <p>
                <b>Lunch Type6</b>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="special-price">
                <h3>$18</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekSpecialLunch;
