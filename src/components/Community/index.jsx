import React, { useState } from "react";

import car1 from "image/car1.png";
import car2 from "image/car2.png";
import car3 from "image/car3.png";
import car4 from "image/car4.png";
import car5 from "image/car5.png";
import car6 from "image/car6.png";
import twitter from "image/twitter-1.png";
import facebook from "image/facebook.png";
import intagram from "image/intagram.png";
import SliderMobileBox from "./components/Slider/Mobile";
import LiveGame from "./components/LiveGame";
import SliderComponent from "./components/Slider";
import "./community.scss";

function Community(props) {
  const [height, SetHeight] = useState(150);
  console.log(height);
  const dataLive = [
    {
      id: 1,
      image: car1,
    },
    {
      id: 2,
      image: car2,
    },
    {
      id: 3,
      image: car3,
    },
    {
      id: 4,
      image: car4,
    },
    {
      id: 5,
      image: car5,
    },
    {
      id: 6,
      image: car6,
    },
  ];
  const handleClick = (e, height) => {
    if (height === 150) {
      SetHeight(500);
    } else {
      SetHeight(150);
    }
  };

  return (
    <div
      className={`container-fluid community ${
        height === 150 ? "community_150" : "community_500"
      }`}
    >
      <div className="row align-items-center community_padding">
        <LiveGame dataLive={dataLive} />
        <div className="col-12 offset-md-3 col-md-6 community_search community_desk">
          <p className="community_search_title">All Posts</p>
          <div className="community_search_title2">
            <div className="community_search_title2_icon ">
              <img src={twitter} alt="twitter" />
              <img src={intagram} alt="intagram" />
              <img src={facebook} alt="facebook" />
            </div>
            <div className="community_search_title2_inputSearch  ">
              <input type="text" placeholder="Search" />
              <i class="fas fa-search"></i>
            </div>
          </div>
        </div>
        <div className="col-12 offset-md-3 col-md-6 community_search community_mobile">
          <p className="community_search_title">All Posts</p>
          <div className="community_search_title2">
            <div className="community_search_title2_icon ">
              <img src={twitter} alt="twitter" />
              <img src={intagram} alt="intagram" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
        <div className="community_search_title2_inputSearch  community_mobile">
          <input type="text" placeholder="Search" />
          <i class="fas fa-search"></i>
        </div>
        <SliderComponent />
        <SliderMobileBox />
      </div>
      <div
        className={
          height === 150 ? "community_mobile1_more" : "community_mobile1_less"
        }
      >
        <button onClick={(e) => handleClick(e, height)}>
          {height === 150 ? "More" : "Show less"}
        </button>
      </div>
    </div>
  );
}

export default Community;
