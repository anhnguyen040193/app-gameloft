import React, { useState } from "react";
import minion from "image/Minion.png";
import "./register.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";

Register.propTypes = {};

function Register(props) {
  const [check, SetCheck] = useState(false);
  useEffect(() => {
    SetCheck(true);
  }, []);
  return (
    <div className="container-fluid register">
      <div className="row align-items-center register_padding">
        <div className="offset-md-2 col-md-3 register_img">
          <img src={minion} alt="minion" />
        </div>
        <div className="col-12 offset-md-2 col-md-2 register_form">
          <p className="register_form_title">Stay in the know!</p>
          <span className="register_form_text1">Don't get left behing</span>
          <span className="register_form_text2">
            Subscribe to our newsletters today
          </span>
          <form
            className={check ? "promotional_FirstRender" : "promotional_none"}
          >
            <div className="mb-3">
              <input
                type="text"
                className="form-control register_form_name"
                id="InputName"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control register_form_name"
                id="InputEmail"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="mb-3 register_form_select_position">
              <select
                id="idCountry"
                className="form-select register_form_select"
              >
                <option>Country</option>
              </select>
              <i class="fas fa-chevron-down register_form_select_position_icon"></i>
            </div>
            <div className="mb-3 register_form_select_position">
              <select
                id="idPlatform"
                className="form-select register_form_select"
              >
                <option>Platform</option>
              </select>
              <i class="fas fa-chevron-down register_form_select_position_icon"></i>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="FieldsetCheck1"
                />
                <label
                  className="form-check-label register_form_labelcheck"
                  for="FieldsetCheck1"
                >
                  By signing up, I confirm that I am 13 years old or older. I
                  agree to the Gameloft Terms and Conditions and I have read the
                  Privacy Policy.
                </label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="FieldsetCheck2"
                />
                <label
                  className="form-check-label register_form_labelcheck"
                  for="FieldsetCheck2"
                >
                  I agree to receive promotional offers relating to all Gameloft
                  games and services.
                </label>
              </div>
            </div>
            <div className="mb-3 register_form_center_btnButton">
              <button type="submit" class="btn  register_form_btnButton">
                Button
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
