import React, { useEffect, useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import support from "image/support.png";
import share from "image/share.png";
import mail from "image/mail.png";
import Banner from "components/Banner";
import Register from "components/RegisterForm";
import Community from "components/Community";
import Promotional from "components/Promotional";
import Exclusive from "components/Exclusive";
import Footer from "common/Footer";
import "./product.scss";

function PageProduct(props) {
  const [index, SetIndex] = useState(0);
  console.log(index);
  const data = [
    { id: 1, component: <Banner /> },
    { id: 2, component: <Register /> },
    { id: 3, component: <Community /> },
    { id: 4, component: <Promotional /> },
    { id: 5, component: <Exclusive /> },
    { id: 6, component: <Footer /> },
  ];

  const nextIndex = () => {
    setTimeout(() => {}, 1000);
    if (index === data.length - 1) {
      return SetIndex(0);
    }

    return SetIndex(index + 1);
  };

  const prevIndex = () => {
    setTimeout(() => {}, 300);
    if (index === 0) {
      SetIndex(data.length - 1);
    } else {
      return SetIndex(index - 1);
    }
  };

  return (
    <div className="product">
      <div className="product_display">
        <ReactScrollWheelHandler
          upHandler={prevIndex}
          downHandler={nextIndex}
          style={{
            width: "100%",
            height: "100vh",
            transition: "all .35s ease-in-out 0s",
          }}
        >
          {data[index].component}
        </ReactScrollWheelHandler>
      </div>

      <div className="product_display_mobile">
        <Banner />
        <Register />
        <Community />
        <Promotional />
        <Exclusive />
        <Footer />
      </div>

      <div className="banner_right">
        <ul>
          <li>
            <img src={share} alt="share" />
          </li>
          <li className="banner_right_circle">
            <div>
              <img src={mail} alt="mail" />
            </div>
          </li>
          <li className="banner_right_circle">
            <div>
              <img src={support} alt="support" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PageProduct;
