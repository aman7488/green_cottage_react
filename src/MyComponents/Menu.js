import React from "react";
import "./Menu.css";
import AddCart from "./Menu/AddCart";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-head" id="jump-to-menu">
        <div className="heading">
          <div className="dash-menu">
            <p>
              &#x2015;&#x2015;&#x2015; <span id="head-about"> Menu </span>{" "}
              &#x2015;&#x2015;&#x2015;
            </p>
          </div>
          <h1>Our Must Try Special Picks </h1>
        </div>
      </div>

      <div className="menu-item-carousel">
        {/* <!-- <ul className="each-menu">
                <h6>$22</h6>
                <div className="info">
                    <h1 className="title">Choco CupCake</h1>
                    <p className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolor?
                    </p>
                </div>
            </ul> --> */}
        <div className="menu-p1">
          <div className="menu-pack">
            <div className="menu-item1">
              <div className="menu-price">
                <h3>$10</h3>
              </div>
              <div className="menu-info">
                <h2 className="title">Food Item1</h2>
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Libero, temporibus?
                </p>
              </div>
            </div>
            <AddCart />
          </div>

          <div className="menu-pack">
            <div className="menu-item2" id="menu-card">
              <div className="menu-price">
                <h3>$18</h3>
              </div>
              <div className="menu-info">
                <h2 className="title">Food Item2</h2>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, dignissimos.
                </p>
              </div>
            </div>
            <AddCart />
          </div>
        </div>

        <div className="menu-p2">
          <div className="menu-pack">
            <div className="menu-item3" id="menu-card">
              <div className="menu-price">
                <h3>$15</h3>
              </div>
              <div className="menu-info">
                <h2 className="title">Food Item3</h2>
                <p className="desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quia, omnis!
                </p>
              </div>
            </div>
            <AddCart />
          </div>

          <div className="menu-pack">
            <div className="menu-item4" id="menu-card">
              <div className="menu-price">
                <h3>$10</h3>
              </div>
              <div className="menu-info">
                <h2 className="title">Food Item4</h2>
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae, nostrum.
                </p>
              </div>
            </div>
            <AddCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
