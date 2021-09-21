import React from "react";
import logo from "image/Gameloft_Logo.png";
import menu from "image/HambugerMenu.png";
import "./header.scss";
function Header(props) {
  return (
    <header className="header">
      <div class="container-fluid">
        <div className="row align-items-center header_padding">
          <div className="col-6 header_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-6 header_menu">
            <img src={menu} alt="menu" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
