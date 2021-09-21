import React, { useState } from "react";
import box from "image/box1.png";
import PropTypes from "prop-types";
import { useEffect } from "react";

SliderComponent.propTypes = {};

function SliderComponent(props) {
  const [indexSlider, SetIndexSlider] = useState(0);

  const number = 248;
  const data = [
    { id: 11, image: box },
    { id: 12, image: box },
    { id: 13, image: box },
    { id: 14, image: box },
    { id: 15, image: box },
    { id: 16, image: box },
    { id: 17, image: box },
    { id: 18, image: box },
    { id: 19, image: box },
    { id: 20, image: box },
  ];
  const [check, SetCheck] = useState(false);
  useEffect(() => {
    SetCheck(true);
  }, []);
  const handleSlider = (index) => {
    if (index <= 0) {
      SetIndexSlider(0);
    } else if (index >= data.length - 1) {
      SetIndexSlider(data.length - 1);
    } else {
      SetIndexSlider(index);
    }
  };

  return (
    <div className="col-12 community_desk1">
      <div
        className={`community_slider ${
          check ? "promotional_FirstRender" : "promotional_none"
        }`}
      >
        {data.map((item, index) => {
          return (
            <div
              key={item.id}
              style={{
                transform:
                  indexSlider === 0
                    ? "translateX(808px)"
                    : indexSlider === 9
                    ? "translateX(-1424px)"
                    : `translateX(${808 - indexSlider * number}px)`,
              }}
            >
              <img src={item.image} alt={item.id} />
            </div>
          );
        })}
      </div>
      <div className=" community_pagination">
        <div onClick={(e) => handleSlider(indexSlider - 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="40"
            viewBox="0 0 48 40"
            fill="#2699fb"
            opacity={indexSlider === 0 ? "0.45" : "1"}
          >
            <path
              id="arrow"
              className="cls-1"
              d="M37.379,12.552a2,2,0,0,0-2.758,2.9L49.963,30H10a2,2,0,0,0,0,4H49.9L34.621,48.552a2,2,0,1,0,2.758,2.9l17.449-16.62a4,4,0,0,0-.035-5.69Z"
              transform="translate(56 52) rotate(180)"
            />
          </svg>
        </div>
        <div className="community_pagination_number">
          {indexSlider + 1 === 10 ? "10" : `0${indexSlider + 1}`}/{data.length}
        </div>
        <div onClick={(e) => handleSlider(indexSlider + 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="40"
            viewBox="0 0 48 40"
            fill="#2699fb"
            opacity={indexSlider === 9 ? "0.45" : "1"}
          >
            <path
              id="arrow"
              className="cls-1"
              d="M37.379,12.552a2,2,0,0,0-2.758,2.9L49.963,30H10a2,2,0,0,0,0,4H49.9L34.621,48.552a2,2,0,1,0,2.758,2.9l17.449-16.62a4,4,0,0,0-.035-5.69Z"
              transform="translate(-8 -12)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;
