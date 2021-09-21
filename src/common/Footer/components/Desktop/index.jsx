import React, { useState } from "react";
import footerLogo from "image/footer-logo.svg";
import footerFB from "image/footerFB.svg";
import footerYoutube from "image/youtube-footer.png";
import footerTwit from "image/twitter-footer.png";
import footerLinkedin from "image/linkedin-footer.png";
import { useEffect } from "react";
import PropTypes from "prop-types";

FooterDesktop.propTypes = {};

function FooterDesktop(props) {
  const [check, SetCheck] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SetCheck(true);
    }, 100);
  }, []);
  return (
    <>
      <div className="col-12 offset-md-3 col-md-6 footer_display ">
        <div className={check ? "footer_FirstRender" : "footer_none"}>
          <img src={footerLogo} alt="footerLogo" className="footer_logo" />
          <p className="footer_follow">Follow Us</p>
          <div>
            <img src={footerFB} alt="footerFB" className="footer_icon" />
            <img
              src={footerLinkedin}
              alt="footerLinkedin"
              className="footer_icon"
            />
            <img src={footerTwit} alt="footerTwit" className="footer_icon" />
            <img
              src={footerYoutube}
              alt="footerYoutube"
              className="footer_icon"
            />
          </div>
          <div className=" footer_select">
            <select
              className="form-select "
              aria-label="Default select example"
            >
              <option selected>English</option>
            </select>
            <i className="fas fa-chevron-down footer_select_iconArrow"></i>
          </div>
        </div>
        <div>
          <div className={check ? "footer_FirstRender" : "footer_none"}>
            <p className="footer_title2">VISIT</p>
            <p className="footer_text1">Gameloft Games</p>
            <p className="footer_text1">Gameloft Careers</p>
            <p className="footer_text1">Gameloft News</p>
            <p className="footer_text1">Gameloft Forum</p>
            <p className="footer_text1">Gameloft Corporate</p>
            <p className="footer_text1">Gameloft Advertising</p>
            <p className="footer_text1">Gameloft Support</p>
          </div>
          <div
            className={`footer_margin ${
              check ? "footer_FirstRender" : "footer_none"
            }`}
          >
            <p className="footer_title2">LEGAL</p>
            <p className="footer_text1">Terms of Use</p>
            <p className="footer_text1">Privacy Policy</p>
            <p className="footer_text1">Cookies Policy</p>
            <p className="footer_text1">EULA</p>
            <p className="footer_text1">Legal Notices</p>
            <p className="footer_text1">Event Rules</p>

            <p className="footer_text1">Business Contacts</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterDesktop;
