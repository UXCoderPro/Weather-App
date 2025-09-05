import React from "react";
import Other from "./Other";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { FaNfcDirectional } from "react-icons/fa6";
import { TiDirections } from "react-icons/ti";

const Weather = ({
  climate,
  temp,
  country,
  city,
  desc,
  speed,
  humidity,
  latitude,
  longitude,
}) => {
  return (
    <div className="w-full flex flex-col  justify-start items-start gap-10">
      <div className="flex w-full flex-col justify-center items-center bg-bigBox-gradient p-10 rounded-[72px] gap-11 border border-solid border-[#a6a6a6]">
        <img
          src={climate}
          alt="Climate"
          className="object-cover w-fit h-fit mb-5"
        />

        <div className="flex w-full justify-center items-center gap-10 flex-wrap self-stretch">
          <h1 className="font-amiri text-8xl font-bold text-white">{temp}°C</h1>
          <div className="flex flex-col items-start gap-3">
            <p className="self-stretch text-textShade font-publicSans font-medium text-base text-center">
              {country}
            </p>
            <h2 className="self-stretch text-white font-publicSans font-semibold text-2xl text-center">
              {city}
            </h2>
            <p className="self-stretch text-textShade font-publicSans font-medium text-xl text-center">
              {desc}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-center items-center content-center gap-3 ">
        <Other
          icon={<LuWind size={40} />}
          container="Wind Speed"
          answer={speed}
        />
        <Other
          icon={<FaNfcDirectional size={40} />}
          container="Latitude"
          answer={latitude}
        />
        <Other
          icon={<TiDirections size={40} />}
          container="Longitude"
          answer={longitude}
        />
        <Other
          icon={<WiHumidity size={40} />}
          container="Humidity"
          answer={humidity}
        />
      </div>
    </div>
  );
};

export default Weather;
