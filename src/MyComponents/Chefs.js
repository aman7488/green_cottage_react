import React from "react";
import "./Chefs.css";

const Chefs = () => {
  return (
    <div className="chefs">
      {/* <!-- <div className="row"> --> */}
      <div className="dash-chefs" id="jump-to-chefs">
        <p>
          &#x2015;&#x2015;&#x2015; <span id="head-about"> Our Chefs</span>{" "}
          &#x2015;&#x2015;&#x2015;
        </p>
        {/* <!-- </div> --> */}
        <h1>We offer a great quality with best hygiene</h1>
      </div>

      <div className="container">
        <ul className="each-chef">
          <li>
            <img id="chef1" src={require("./Images/chef1.jpg")} alt="chef" />
            <div className="chef-down">
              <h4>Alton Keller</h4>
              <div className="chef-flex">
                <a
                  className="chef-info"
                  href="http://www.google.com"
                  target="_blank"
                  id="wapt"
                >
                  <img src={require("./Images/insta_logo.png")} alt="inst" />
                </a>
                <a
                  className="chef-info"
                  href="http://www.google.com"
                  target="_blank"
                  id="inst"
                >
                  <img src={require("./Images/wapp_logo.png")} alt="Facebook" />
                </a>
                <a
                  className="chef-info"
                  href="http://www.google.com"
                  target="_blank"
                  id="twit"
                >
                  <img
                    src={require("./Images/twitter_logo.png")}
                    alt="Facebook"
                  />
                </a>
              </div>
            </div>
          </li>
          <li>
            <img id="chef2" src={require("./Images/chef2.jpg")} alt="chef" />
            <div className="chef-down">
              <h4>Gordon Besh</h4>
              <div className="chef-flex">
                <a
                  className="chef-info"
                  href="http://www.google.com"
                  target="_blank"
                  id="wapt"
                >
                  <img src={require("./Images/insta_logo.png")} alt="inst" />
                </a>
                <a
                  className="chef-info"
                  href="http://www.google.com"
                  target="_blank"
                  id="inst"
                >
                  <img src={require("./Images/wapp_logo.png")} alt="Facebook" />
                </a>
                <a
                  className="chef-info"
                  href="http://www.google.com"
                  target="_blank"
                  id="twit"
                >
                  <img
                    src={require("./Images/twitter_logo.png")}
                    alt="Facebook"
                  />
                </a>
              </div>
            </div>
          </li>
          <li>
            <img id="chef3" src={require("./Images/chef3.jpg")} alt="chef" />
            <div className="chef-down">
              <h4>Hiroyuki Boulud</h4>
              <div className="chef-flex">
                <a
                  className="chef-info"
                  href="http://www.google.com"
                  target="_blank"
                  id="wapt"
                >
                  <img src={require("./Images/insta_logo.png")} alt="inst" />
                </a>
                <a
                  className="chef-info"
                  href="http://www.google.com"
                  target="_blank"
                  id="inst"
                >
                  <img src={require("./Images/wapp_logo.png")} alt="Facebook" />
                </a>
                <a
                  className="chef-info"
                  href="http://www.google.com"
                  target="_blank"
                  id="twit"
                >
                  <img
                    src={require("./Images/twitter_logo.png")}
                    alt="Facebook"
                  />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Chefs;
