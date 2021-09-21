import React from "react";
import FooterDesktop from "./components/Desktop";
import FooterMobile from "./components/Mobile";
import "./footer.scss";

function Footer(props) {
  return (
    <div className="container-fluid footer">
      <div className="row  footer_padding">
        <FooterDesktop />
        <FooterMobile />
        <div className="footer_line"></div>
        <div className=" footer_copyright">
          <p>
            ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo
            are trademarks of Gameloft in the U.S. and/or other countries. All
            other trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
