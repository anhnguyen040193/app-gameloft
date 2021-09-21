import React, { useState } from "react";
import arrowLeft from "image/arrowLeft.svg";
import arrowRight from "image/arrowRight.svg";
import PropTypes from "prop-types";

LiveGame.propTypes = {
  dataLive: PropTypes.array,
};
LiveGame.defaultProps = {
  dataLive: [],
};

function LiveGame(props) {
  const { dataLive } = props;
  const [isIndex, SetIsIndex] = useState(0);
  const num = 100;
  const handleChangeIndex = (index) => {
    if (index <= 0) {
      SetIsIndex(0);
    } else if (index >= dataLive.length - 1) {
      SetIsIndex(dataLive.length - 1);
    } else {
      SetIsIndex(index);
    }
  };

  return (
    <div className="col-12 offset-md-3 col-md-6">
      <p className="community_Live_title">Game Community Hub</p>
      <p className="community_Live_text1">Live Game Updates</p>
      <div className="community_Live">
        <div
          className="community_Live_arrowLeft"
          onClick={(e) => handleChangeIndex(isIndex - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.744"
            height="44.175"
            viewBox="0 0 24.744 44.175"
            fill="#2699fb"
            opacity={isIndex === 0 ? "0.45" : "1"}
          >
            <path
              id="Shape_670_copy"
              data-name="Shape 670 copy"
              className="cls-1"
              d="M595.083,2302.383l16.654,16.419a3.22,3.22,0,0,0,4.5,0,3.111,3.111,0,0,0,0-4.443l-18.745-18.477a3.666,3.666,0,0,0-4.82,0l-18.744,18.477a3.111,3.111,0,0,0,0,4.443,3.217,3.217,0,0,0,4.5,0Zm0,0"
              transform="translate(-2294.974 617.171) rotate(-90)"
            />
          </svg>
        </div>
        <div className="community_Live_box community_desk">
          {dataLive.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`community_Live_circle ${
                  isIndex === index ? "community_Live_circle_border" : ""
                }`}
                onClick={(e) => handleChangeIndex(index)}
              >
                <img src={item.image} alt="" />
              </div>
            );
          })}
        </div>
        <div className="community_Live_box community_mobile">
          {dataLive.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`community_Live_circle ${
                  isIndex === index ? "community_Live_circle_border" : ""
                }`}
                style={{
                  transform: `translateX(${220 - isIndex * num}px)`,
                }}
                onClick={(e) => handleChangeIndex(index)}
              >
                <img src={item.image} alt="" />
              </div>
            );
          })}
        </div>

        <div
          className="community_Live_arrowRight"
          onClick={(e) => handleChangeIndex(isIndex + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.744"
            height="44.175"
            viewBox="0 0 24.744 44.175"
            fill=" #2699fb"
            opacity={isIndex === dataLive.length - 1 ? "0.45" : "1"}
          >
            <path
              id="Shape_670_copy"
              data-name="Shape 670 copy"
              className="cls-1"
              d="M595.083,2302.383l16.654,16.419a3.22,3.22,0,0,0,4.5,0,3.111,3.111,0,0,0,0-4.443l-18.745-18.477a3.666,3.666,0,0,0-4.82,0l-18.744,18.477a3.111,3.111,0,0,0,0,4.443,3.217,3.217,0,0,0,4.5,0Zm0,0"
              transform="translate(2319.719 -572.996) rotate(90)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LiveGame;
