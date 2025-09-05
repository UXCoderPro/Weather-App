import React from "react";
import { useWeather } from "./Hooks/UseWeather";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Weather from "./Components/Weather";
import Loading from "./Components/Loading";
import NoData from "./Components/NoData";
import Error from "./Components/Error";

const App = () => {
  const {
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
  } = useWeather("Tenkasi");

  return (
    <div className="h-screen max-w-lg bg-bg mx-auto relative px-4 py-6 flex flex-col justify-start items-start gap-16">
      <Header onChange={handleCity} value={text} onKeyDown={handleKey} />
      {loading && <Loading />}
      {notFound && <NoData />}
      {error && <Error />}
      {!loading && !notFound && (
        <Weather
          climate={icon}
          temp={temp}
          desc={desc}
          country={country}
          city={city}
          speed={speed}
          latitude={lati}
          longitude={longi}
          humidity={humidi}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
