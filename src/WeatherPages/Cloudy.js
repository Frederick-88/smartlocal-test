import React, { useState } from "react";

import cloud from "../assets/cloudyfix.gif";
import logo from "../assets/logo.png";
import "../style.css";

function Cloudy(props) {
  const [inputCity, setInputCity] = useState("");
  const [inputCountry, setInputCountry] = useState("");

  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "25rem",
    };
  };

  const handleChangeCityInput = (event) => {
    let { value } = event.currentTarget;
    setInputCity(value);
  };

  const handleChangeCountryInput = (event) => {
    let { value } = event.currentTarget;
    setInputCountry(value);
  };

  const handleSubmit = () => {
    if (inputCity && inputCountry) {
      props.getDataCity(inputCity);
      props.getDataCountry(inputCountry);
    } else {
      window.alert("Please fill city & country form correctly");
    }
  };

  return (
    <div className="cloudy-bg">
      <div className="text-center">
        <img src={logo} style={{ width: "15rem", margin: "1rem" }} alt="..." />
        <hr className="hr-navbar mt-0" />
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-5 mb-4">
            <div className="w-100 rounded-circle " style={picture(cloud)} />
          </div>

          <div className="col-md-7 text-white text-center align-self-center">
            <div className="d-flex d-row justify-content-center">
              <i className="fas fa-map-marker-alt icon-fx" />
              <h3 className="my-0">
                {props.dataLocationWeather.name},{" "}
                {props.dataLocationWeather.country}
              </h3>
            </div>
            <h6 className="celcius-txt my-0">
              {props.dataCurrentWeather.temperature}°C
            </h6>
            <h3>CLOUDY</h3>
            <i className="fas fa-cloud fa-4x mb-4" />
            <p>Last Update: {props.dataLocationWeather.localtime}</p>
          </div>
        </div>

        <div className="row text-center mt-4 text-white">
          <div className="col-md-4">
            <p className="display-4 my-0">
              {props.dataCurrentWeather.humidity}%
            </p>
            <div className="d-flex d-row justify-content-center">
              <h3>HUMIDITY</h3>
              <i className="fas fa-tint icon-fx2" />
            </div>
          </div>
          <div className="vertical-line" />
          <div className="col-md-3">
            <p className="display-4 my-0">
              {props.dataCurrentWeather.visibility}km
            </p>
            <div className="d-flex d-row justify-content-center">
              <h3>VISIBILITY</h3>
              <i className="far fa-eye icon-fx2" />
            </div>
          </div>
          <div className="vertical-line" />
          <div className="col-md-4">
            <p className="display-4 my-0">
              {props.dataCurrentWeather.wind_speed}km/h
            </p>
            <div className="d-flex d-row justify-content-center">
              <h3>WIND SPEED</h3>
              <i className="fas fa-wind icon-fx2" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div class="input-group">
            <input
              type="text"
              class="form-control py-4"
              placeholder="Search the City you want to check about . . ."
              onChange={handleChangeCityInput}
              required
            />
            <input
              type="text"
              class="form-control py-4"
              placeholder="Search the Country you want to check about . . ."
              onChange={handleChangeCountryInput}
              required
            />
            <div class="input-group-prepend">
              <button
                className="btn btn-primary px-4"
                type="button"
                id="button-addon2"
                onClick={handleSubmit}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a class="btn btn-primary home-btn" href="/" role="button">
            <i class="fas fa-arrow-circle-left mr-3"></i>
            Back to Home
          </a>
        </div>
      </div>
      <div className="footer-bg d-flex justify-content-center">
        <div className="align-self-center text-center">
          <h4 className="text-white">Check out the Founder!</h4>
          <a
            className="icon-fx"
            href="https://github.com/Frederick-88"
            target="blank"
          >
            <i class="fab fa-github" />
          </a>
          <a className="icon-fx" href="https://fdtech.asia/" target="blank">
            <i class="fab fa-safari" />
          </a>
          <a
            className="icon-fx"
            href="https://www.linkedin.com/in/chen-frederick-1324301a8/"
            target="blank"
          >
            <i class="fab fa-linkedin" />
          </a>
          <p className="text-white mb-0 mt-2">© 2020 Weatherpedia Batam</p>
        </div>
      </div>
    </div>
  );
}

export default Cloudy;
