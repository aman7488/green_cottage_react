import React from "react";

const WeekSpecialDinner = (props) => {
  return (
    <div className={props.name} id="visible-dinner">
      <div className="left-special">
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item5.jpg")} alt="Pic" />
              <p>
                <b>Dinner Type1</b>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="special-price">
                <h3>$20</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item6.jpg")} alt="Pic" />
              <p>
                <b>Dinner Type2</b>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="special-price">
                <h3>$25</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item5.jpg")} alt="Pic" />
              <p>
                <b>Dinner Type3</b>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="special-price">
                <h3>$20</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-special">
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item6.jpg")} alt="Pic" />
              <p>
                <b>Dinner Type4</b>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="special-price">
                <h3>$25</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item5.jpg")} alt="Pic" />
              <p>
                <b>Dinner Type5</b>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="special-price">
                <h3>$20</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="time-content">
          <div id="time-Breakfast">
            <div className="bf-item1">
              <img src={require("../Images/Menu/item6.jpg")} alt="Pic" />
              <p>
                <b>Dinner Type6</b>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
              <div className="special-price">
                <h3>$25</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekSpecialDinner;
