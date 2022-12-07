import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about_left" id="jump-to-about">
        <div className="head">
          {/* <!-- <h6 id="head-about">
                    ::before
                    About Us
                </h6> --> */}
          <div className="dash">
            <p>
              &#x2015;&#x2015;&#x2015; <span id="head-about"> About Us</span>{" "}
              &#x2015;&#x2015;&#x2015;
            </p>
          </div>
          <h1>Have a Mouthful Of Joy</h1>
        </div>

        <p className="about_content1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          cumque commodi consectetur nemo voluptate, illo harum esse laudantium
          nostrum sit molestiae omnis repellendus fuga ducimus, voluptatibus
          dolores provident, quia saepe?
        </p>
        <p className="about_content2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          esse facilis aliquam iste perspiciatis, atque delectus at ipsam quis
          ipsa?
        </p>

        <div className="abms">
          <img id="abm1" src={require("./Images/dishes1.jpg")} alt="dish1" />
          <img id="abm2" src={require("./Images/dish2.jpg")} alt="dish1" />
          <img id="abm3" src={require("./Images/dishes3.jpg")} alt="dish1" />
        </div>
      </div>
      <div className="about_right">
        <img
          id="about_bg"
          src={require("./Images/interior2.jpg")}
          alt="photo"
        />
      </div>
    </div>
  );
};

export default About;
