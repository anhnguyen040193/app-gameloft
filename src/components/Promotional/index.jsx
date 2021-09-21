import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import moutain from "image/moutain.png";
import Rectangle from "image/Rectangle.png";
import share1 from "image/share1.png";
import "./promotional.scss";
import PropTypes from "prop-types";
import PromotionalMobileSlider from "./Mobile";

Promotional.propTypes = {};

function Promotional(props) {
  const [indexPro, SetIndexPro] = useState(0);
  const data = [
    {
      id: 21,
      image: Rectangle,
    },
    {
      id: 22,
      image: Rectangle,
    },
    {
      id: 23,
      image: Rectangle,
    },
    {
      id: 24,
      image: Rectangle,
    },
    {
      id: 25,
      image: Rectangle,
    },
  ];
  const [check, SetCheck] = useState(false);
  useEffect(() => {
    SetCheck(true);
  }, []);

  useEffect(() => {
    if (indexPro >= data.length - 1) {
      const timeout = setTimeout(() => {
        SetIndexPro(0);
      }, 3000);
      return () => {
        console.log("clear timeout");
        clearTimeout(timeout);
      };
    } else {
      const timeout = setTimeout(() => {
        SetIndexPro(indexPro + 1);
      }, 3000);
      return () => {
        console.log("clear timeout");
        clearTimeout(timeout);
      };
    }
  });

  const handleClick = (e, index) => {
    if (index <= 0) {
      SetIndexPro(0);
    } else if (index >= data.length - 1) {
      SetIndexPro(data.length - 1);
    } else {
      SetIndexPro(index);
    }
  };
  return (
    <div className="container-fluid promotional">
      <div className="row align-items-center promotional_padding">
        <div className="col-12 offset-md-3 col-md-6 ">
          <p className="promotional_title"> SPECIAL EVENTS & PROMOTIONAL</p>
          <p className="promotional_text1">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos.
          </p>
        </div>
        <div
          className={`col-12  promotional_slider promotional_desk ${
            check ? "promotional_FirstRender" : "promotional_none"
          }`}
        >
          {data.map((item, index) => {
            return (
              <div
                className={`promotional_slider_transform ${
                  indexPro === index ? "promotional_active" : ""
                }`}
                style={{ transform: `translateX(${800 - indexPro * 400}px)` }}
                key={`promotion${item.id}`}
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
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore ...{" "}
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
        <PromotionalMobileSlider
          data={data}
          check={check}
          indexPro={indexPro}
        />
        <div className="col-12 ">
          <div className="promotional_pagination">
            {data.map((item, index) => {
              return (
                <>
                  {index === indexPro ? (
                    <div style={{ marginRight: "50px" }}>
                      <CountdownCircleTimer
                        rotation="counterclockwise"
                        strokeWidth={3}
                        size={30}
                        isPlaying
                        duration={3}
                        colors={[["#2699FB"]]}
                        onComplete={() => [true, 1000]}
                        key={`bb${item.id}`}
                      >
                        {({ remainingTime }) => {
                          return (
                            <div
                              className="promotional_pagination_item"
                              onClick={(e) => handleClick(e, index)}
                            >
                              0{index + 1}
                            </div>
                          );
                        }}
                      </CountdownCircleTimer>
                    </div>
                  ) : (
                    <div
                      className="promotional_pagination_item promotional_pagination_item_margin "
                      onClick={(e) => handleClick(e, index)}
                      key={`aa${item.id}`}
                    >
                      0{index + 1}
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotional;
