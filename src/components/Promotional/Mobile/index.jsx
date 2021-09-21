import React, { useEffect, useState } from "react";
import moutain from "image/moutain.png";
import share1 from "image/share1.png";
import PropTypes from "prop-types";

PromotionalMobileSlider.propTypes = {
  data: PropTypes.array,
  check: PropTypes.bool,
  indexPro: PropTypes.number,
};
PromotionalMobileSlider.defaultProp = {
  data: [],
  check: false,
  indexPro: 0,
};

function PromotionalMobileSlider(props) {
  const { check, data, indexPro } = props;
  return (
    <div
      className={`col-12  promotional_slider promotional_mobile ${
        check ? "promotional_FirstRender" : "promotional_none"
      }`}
    >
      {data.map((item, index) => {
        return (
          <div
            className={`promotional_slider_transform ${
              indexPro === index ? "promotional_active" : ""
            }`}
            style={{ transform: `translateX(${560 - indexPro * 280}px)` }}
            key={`promotionMobile${item.id}`}
          >
            <div className="promotional_slider_background">
              <img
                src={item.image}
                alt={item.id}
                className="promotional_slider_background_img"
              />
              <img
                src={moutain}
                alt="moutain"
                className="promotional_slider_background_img1"
              />
              <div className="promotional_slider_content">
                <div>
                  <div className="promotional_slider_content_header">
                    <div className="promotional_slider_content_header_title">
                      SHORT TITLE HERE
                    </div>
                    <div className="promotional_slider_content_header_icon">
                      <img src={share1} alt="share1" />
                    </div>
                  </div>
                  <div className="promotional_slider_content_line" />
                  <div className="promotional_slider_content_text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore ...{" "}
                  </div>
                </div>

                <button className="promotional_slider_content_button">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PromotionalMobileSlider;
