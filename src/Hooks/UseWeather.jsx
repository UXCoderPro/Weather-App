import { useState, useEffect } from "react";

import brokenClouds from "../assets/weather/brokenClouds.svg";
import clearSky from "../assets/weather/clearsky.svg";
import mist from "../assets/weather/mist.svg";
import rain from "../assets/weather/rain.svg";
import scatteredClouds from "../assets/weather/scatteredClouds.svg";
import shoerRain from "../assets/weather/shoerRain.svg";
import snow from "../assets/weather/snow.svg";
import thunderStrom from "../assets/weather/thunderStrom.svg";

const weatherIconMap = {
  "01d": clearSky,
  "01n": clearSky,
  "02d": mist,
  "02n": mist,
  "03d": scatteredClouds,
  "03n": scatteredClouds,
  "04d": brokenClouds,
  "04n": brokenClouds,
  "09d": shoerRain,
  "09n": shoerRain,
  "10d": rain,
  "10n": rain,
  "11d": thunderStrom,
  "11n": thunderStrom,
  "13d": snow,
  "13n": snow,
};

const api_key = "1cf3d4529e333cc613094222546f6bf6";

export const useWeather = (defaultCity = "Tenkasi") => {
  const [city, setCity] = useState(defaultCity);
  const [temp, setTemp] = useState(0);
  const [desc, setDesc] = useState("");
  const [country, setCountry] = useState("");
  const [speed, setSpeed] = useState(0);
  const [lati, setLati] = useState(0);
  const [longi, setLongi] = useState(0);
  const [humidi, setHumidi] = useState(0);
  const [icon, setIcon] = useState(clearSky);
  const [text, setText] = useState(defaultCity);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async () => {
    setLoading(true);
    setNotFound(false);
    setError(null);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();

      if (data.cod === "404") {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setHumidi(data.main.humidity);
      setSpeed(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setDesc(data.weather[0].description);
      setCountry(data.sys.country);
      setLati(data.coord.lat);
      setLongi(data.coord.lon);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || clearSky);
    } catch (err) {
      setError("Error, While fetching Data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    search();
  }, []);

  const handleCity = (e) => setText(e.target.value);
  const handleKey = (e) => {
    if (e.key === "Enter") search();
  };

  return {
    city,
    temp,
    desc,
    country,
    speed,
    lati,
    longi,
    humidi,
    icon,
    text,
    notFound,
    loading,
    error,
    handleCity,
    handleKey,
    search,
  };
};
