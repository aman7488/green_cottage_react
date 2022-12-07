import React from "react";

const WeekSpecialBreakfast = (props) => {
  return (
    <div className={props.name} id="visible-breakfast">
      <div className="left-special">
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item1.jpg")} alt="Pic" />
              <p>
                <b>Breakfast Type1</b>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisic elit.
              </p>
              <div className="special-price">
                <h3>$10</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item2c.jpg")} alt="Pic" />
              <p>
                <b>Breakfast Type2</b>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisic elit.
              </p>
              <div className="special-price">
                <h3>$15</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item1.jpg")} alt="Pic" />
              <p>
                <b>Breakfast Type3</b>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisic elit.
              </p>
              <div className="special-price">
                <h3>$10</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-special">
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item2c.jpg")} alt="Pic" />
              <p>
                <b>Breakfast Type4</b>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisic elit.
              </p>
              <div className="special-price">
                <h3>$15</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item1.jpg")} alt="Pic" />
              <p>
                <b>Breakfast Type5</b>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisic elit.
              </p>
              <div className="special-price">
                <h3>$10</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item2c.jpg")} alt="Pic" />
              <p>
                <b>Breakfast Type6</b>
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisic elit.
              </p>
              <div className="special-price">
                <h3>$15</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekSpecialBreakfast;
