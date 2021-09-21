import React, { useState } from "react";
import star from "image/star.png";
import star9 from "image/star-9.png";
import moutain from "image/moutain.png";
import microsoft from "image/microsoft.png";
import nintendo from "image/nintendo.png";
import steam from "image/steam.png";

import "./banner.scss";
import { useEffect } from "react";
function Banner(props) {
  const [check, SetCheck] = useState(false);
  useEffect(() => {
    SetCheck(true);
  }, []);
  return (
    <div class="container-fluid banner">
      <div className="row align-items-end banner_padding">
        <div className="banner_image_moutain">
          <img src={moutain} alt="moutain" />
        </div>
        <div
          className={`col-10 offset-md-3 col-md-3 banner_left ${
            check ? "promotional_FirstRender" : "promotional_none"
          }`}
        >
          <div className=" banner_left_title">GAMELOFT GAME</div>
          <div className=" banner_left_rating">
            <p>Racing/Action</p>
            <ul>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star9} alt="star9" />
              </li>
            </ul>
          </div>
          <div className=" banner_left_descript">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud itation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit...
          </div>
        </div>
      </div>
      <div className="row align-items-center banner_footer">
        <div className="col-12 offset-md-3 col-md-3 banner_footer_text">
          Download latest version
        </div>
        <div className="col-12 offset-md-1 col-md-3 banner_footer_logo">
          <div>
            <img src={nintendo} alt="nintendo" />
          </div>
          <div>
            <img src={microsoft} alt="microsoft" />
          </div>
          <div>
            <img src={steam} alt="steam" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
