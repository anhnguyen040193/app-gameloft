import React from "react";
import footerLogo from "image/footer-logo.svg";
import footerFB from "image/footerFBm.svg";
import footerYoutube from "image/youtubeM.png";
import footerTwit from "image/twitterM.png";
import footerLinkedin from "image/linkedinM.png";
import PropTypes from "prop-types";

FooterMobile.propTypes = {};

function FooterMobile(props) {
  return (
    <div className="col-12 footer_mobile">
      <div className="footer_mobile_box">
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
      </div>
      <div className="footer_mobile_logo">
        <img src={footerLogo} alt="footerLogo" className="footer_logo" />
      </div>
      <div className="footer_mobile_text">
        <div>
          <p className="footer_text1">Gameloft Games</p>
          <p className="footer_text1">Gameloft Careers</p>
          <p className="footer_text1">Gameloft News</p>
          <p className="footer_text1">Gameloft Forum</p>
          <p className="footer_text1">Gameloft Corporate</p>
          <p className="footer_text1">Gameloft Advertising</p>
          <p className="footer_text1">Gameloft Support</p>
        </div>
        <div>
          <p className="footer_text1">Terms of Use</p>
          <p className="footer_text1">Privacy Policy</p>
          <p className="footer_text1">Cookies Policy</p>
          <p className="footer_text1">EULA</p>
          <p className="footer_text1">Legal Notices</p>
          <p className="footer_text1">Event Rules</p>
          <p className="footer_text1">Contest Rules</p>
          <p className="footer_text1">Business Contacts</p>
        </div>
      </div>
    </div>
  );
}

export default FooterMobile;
