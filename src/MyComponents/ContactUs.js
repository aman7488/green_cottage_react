import React from "react";
import { useState } from "react";
import "./ContactUs.css";
// import { useAlert } from "react-alert";

const ContactUs = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const notify = () => {
    setErrorMessage("Example error message!");
  };
  //   const alert = useAlert();
  const [startDate, setStartDate] = useState(new Date());
  const [currentVal, setCurrentVal] = useState();
  const [currentTime, setCurrentTime] = useState();

  const changeVal = (newVal) => {
    setCurrentVal(newVal);
  };
  const changeTime = (newTime) => {
    setCurrentTime(newTime);
  };
  //   const notify = () => {
  //     alert.show("Hell yeah!");
  //   };

  return (
    <div className="contact-us" id="jump-to-footer">
      <div className="dash-contact">
        <p>
          &#x2015;&#x2015;&#x2015; <span id="head-about"> Contact Us </span>{" "}
          &#x2015;&#x2015;&#x2015;
        </p>

        <div className="contact-parts">
          <div className="contact-cont">
            <h2>Here You Can Make A Reservation Or Just walkin to our cafe</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              pariatur optio nulla itaque eveniet, maxime deserunt error
              eligendi necessitatibus quibusdam totam. Molestiae temporibus
              autem praesentium quae! Fugit suscipit quam dolor?
            </p>

            <div className="info-box">
              <div className="phone-box">
                <img
                  src={require("./Images/white logos/phone.png")}
                  alt="Call"
                />
                <h3>Call Us</h3>
                <p>123-456-7890</p>
                <p>123-456-7890</p>
              </div>
              <div className="mail-box">
                <img
                  src={require("./Images/white logos/mail.png")}
                  alt="Mail"
                />
                <h3>Drop an Email</h3>
                <p>abc@greencottage.com</p>
                <p>xyz@greencottage.com</p>
              </div>
            </div>
          </div>

          <form id="contact-form" action-method="post">
            <h2>Book Your Table</h2>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Your Name*"
              required
            />

            <input
              name="email"
              type="text"
              id="email"
              pattern="[^@]*@[^@]*"
              placeholder="Your Email"
              required
            />

            <input
              name="phone"
              type="text"
              id="phone"
              placeholder="Contact Number*"
              required
            />

            <select
              onChange={(event) => changeVal(event.target.value)}
              value={currentVal}
              name="number-guests"
              id="number-guests"
            >
              <option value="number-guests">Number Of Guests</option>
              <option value="1" name="1" id="1">
                1
              </option>
              <option value="2" name="2" id="2">
                2
              </option>
              <option value="3" name="3" id="3">
                3
              </option>
              <option value="4" name="4" id="4">
                4
              </option>
            </select>

            <input
              name="date"
              id="date"
              type="text"
              placeholder="dd/mm/yyyy*"
              required
            />
            {/* <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            /> */}

            <select
              onChange={(event) => changeTime(event.target.value)}
              value={currentTime}
              name="time"
              id="time"
            >
              <option value="time">Time</option>
              <option value="Breakfast" id="Breakfast">
                Breakfast
              </option>
              <option value="Lunch" id="Lunch">
                Lunch
              </option>
              <option value="Dinner" id="Dinner">
                Dinner
              </option>
            </select>

            <button
              type="submit"
              id="form-submit"
              class="main-button-icon"
              onClick={notify}
            >
              Make A Reservation
            </button>
            {errorMessage && <div className="error"> {errorMessage} </div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
