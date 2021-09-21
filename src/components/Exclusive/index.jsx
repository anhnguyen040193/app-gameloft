import React, { useState } from "react";
import exclImg from "image/exclusive-image.png";
import iconDownload from "image/downloadIcon.png";
import { useEffect } from "react";
import ExclusiveMobileSlider from "./Mobile";
import "./exclusive.scss";
import PropTypes from "prop-types";

Exclusive.propTypes = {};

function Exclusive(props) {
  const [indexSlider, SetIndexSlider] = useState(0);

  const number = 650;
  const data = [
    { id: 41, img: exclImg },
    { id: 42, img: exclImg },
    { id: 43, img: exclImg },
    { id: 44, img: exclImg },
    { id: 45, img: exclImg },
    { id: 46, img: exclImg },
    { id: 47, img: exclImg },
    { id: 48, img: exclImg },
    { id: 49, img: exclImg },
    { id: 50, img: exclImg },
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
    <div className="container-fluid exclusive">
      <div className="row align-items-center exclusive_padding">
        <div className="col-12 offset-md-3 col-md-7 ">
          <p className=" exclusive_title">EXCLUSIVE GAME CONTENT</p>
          <p className=" exclusive_text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos.
          </p>
        </div>
        <div className="col-12 exclusive_desk">
          <div
            className={`exclusive_content ${
              check ? "exclusive_FirstRender" : "exclusive_none"
            }`}
          >
            {data.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="exclusive_content_item"
                  style={{
                    transform:
                      indexSlider === 0
                        ? "translateX(3000px)"
                        : indexSlider === data.length - 1
                        ? "translateX(-2850px)"
                        : `translateX(${3000 - indexSlider * number}px)`,
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.id}
                    className="exclusive_content_item_img"
                  />

                  <a href={item.img} download={`${item.id}AwesomeImage.png`}>
                    <img
                      src={iconDownload}
                      alt="download"
                      className="exclusive_content_item_iconDownload"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <ExclusiveMobileSlider
          check={check}
          indexSlider={indexSlider}
          data={data}
        />
        <div className="col-12">
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
              {indexSlider + 1 === 10 ? "10" : `0${indexSlider + 1}`}/
              {data.length}
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
      </div>
    </div>
  );
}

export default Exclusive;
