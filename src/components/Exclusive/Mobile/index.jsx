import React from "react";
import iconDownload from "image/downloadIcon.png";
import PropTypes from "prop-types";

ExclusiveMobileSlider.propTypes = {
  check: PropTypes.bool,
  data: PropTypes.array,
  indexSlider: PropTypes.number,
};
ExclusiveMobileSlider.defaultProp = {
  check: false,
  data: [],
  indexSlider: 0,
};

function ExclusiveMobileSlider(props) {
  const { check, data, indexSlider } = props;
  console.log(indexSlider);

  return (
    <div className="col-12 exclusive_mobile">
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
                    ? "translateX(0px)"
                    : indexSlider === data.length - 1
                    ? "translateX(-3015px)"
                    : `translateX(${0 - indexSlider * 340}px)`,
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
  );
}

export default ExclusiveMobileSlider;
