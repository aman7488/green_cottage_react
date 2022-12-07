import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="social-icons">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i class="facebook">
                  <img
                    src={require("./Images/white logos/fb_logo.png")}
                    alt="Facebook"
                  />
                </i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=en-in" target="_blank">
                <i class="twitter">
                  <img
                    src={require("./Images/white logos/twitter_logo.png")}
                    alt="Twitter"
                  />
                </i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i class="insta">
                  <img
                    src={require("./Images/white logos/insta_logo.png")}
                    alt="Instagram"
                  />
                </i>
              </a>
            </li>
            <li>
              <a href="https://web.whatsapp.com/" target="_blank">
                <i class="wapp">
                  <img
                    src={require("./Images/white logos/wapp_logo.png")}
                    alt="WhatsApp"
                  />
                </i>
              </a>
            </li>
          </div>

          <div class="footer-logo">
            <a href="" target="_blank">
              <img
                src={require("./Images/white logos/logo - Copy.png")}
                alt="Logo"
              />
            </a>
          </div>

          <div class="footer-left">
            <a
              id="privacy-policy"
              href="https://policies.google.com/privacy?hl=en-US"
              target="_blank"
            >
              Privacy Policy
            </a>
            <br />
            <a
              id="copyright"
              href="https://en.wikipedia.org/wiki/Copyright"
              target="_blank"
            >
              © Copyrigth Green Cottage Co.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
