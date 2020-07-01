import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import Rainy from "./Rainy";
import Sunny from "./Sunny";
import Storm from "./Storm";
import Windy from "./Windy";
import Cloudy from "./Cloudy";

function Index() {
  const [dataLocationWeather, setDataLocationWeather] = useState({});
  const [dataCurrentWeather, setDataCurrentWeather] = useState({});
  const [dataInputCity, setDataInputCity] = useState("");
  const [dataInputCountry, setDataInputCountry] = useState("");

  useEffect(() => {
    if (dataInputCity && dataInputCountry) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=1e67d54abd920dccb5d3d34c733c3c3b&query=${dataInputCity},${dataInputCountry}`
        )
        .then((response) => {
          setDataLocationWeather(response.data.location);
          setDataCurrentWeather(response.data.current);
        });
    } else {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=1e67d54abd920dccb5d3d34c733c3c3b&query=Batam,Indonesia`
        )
        .then((response) => {
          setDataLocationWeather(response.data.location);
          setDataCurrentWeather(response.data.current);
        });
    }
  }, [dataInputCity, dataInputCountry]);

  let weatherCondition = dataCurrentWeather.weather_code;

  const getDataCity = (data) => {
    setDataInputCity(data);
  };

  const getDataCountry = (data) => {
    setDataInputCountry(data);
  };

  const showWeather = () => {
    // mendefine supaya props ini bisa dimasukkan ke dalam component dibawah.
    const props = {
      dataCurrentWeather,
      dataLocationWeather,
      getDataCity,
      getDataCountry,
    };

    let Weather = <></>;
    if (weatherCondition <= 116) {
      Weather = <Sunny {...props} />;
    } else if (weatherCondition <= 263) {
      Weather = <Windy {...props} />;
    } else if (weatherCondition <= 293) {
      Weather = <Cloudy {...props} />;
    } else if (weatherCondition <= 302) {
      Weather = <Rainy {...props} />;
    } else {
      Weather = <Storm {...props} />;
    }

    return Weather;
  };

  return <div> {showWeather()}</div>;
}

export default Index;
