import React, { useEffect, useState } from "react";
import box from "image/box1.png";
import PropTypes from "prop-types";

SliderMobileBox.propTypes = {};

function SliderMobileBox(props) {
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

  return (
    <div className="col-12 community_mobile1">
      <div className="community_slider ">
        {data.map((item, index) => {
          return (
            <div key={item.id + 50}>
              <img src={item.image} alt={item.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SliderMobileBox;
