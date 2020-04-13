import React, { useState, useEffect } from "react";
import "./Weather.scss";
import WeekDay from "../WeekDay";
import { getWeather } from "../../api";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [isCelsius, setCelsius] = useState(true);
  const [weather, setWeather] = useState(null);
  const [temperature, setTemperature] = useState(null);

  const dateFilter = (day) => {
    let options = {};
    if (day === "day") {
      options = {
        weekday: "long",
        day: "2-digit",
      };
    } else if (day === "month") {
      options = {
        month: "long",
      };
    }
    return new Intl.DateTimeFormat("en-EN", options).format(new Date());
  };

  const cities = [
    "Vladivostok",
    "Boston",
    "Madrid",
    "Australia",
    "Finland",
    "Norway",
    "Italy",
  ];

  const convertDegree = (degree) => {
    if (isCelsius) {
      setTemperature(degree);
    } else {
      const fahrenheit = degree * (9 / 5) + 32;
      setTemperature(fahrenheit.toFixed(2));
    }
  };

  useEffect(() => {
    convertDegree(weather?.main?.temp);
  }, [isCelsius, weather]);

  useEffect(async () => {
    let c = cities[Math.floor(Math.random() * cities.length)];
    const data = await getWeather(c);
    setWeather(data);
  }, []);

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await getWeather(query);
      console.log(data.name);
      setWeather(data);
      setQuery("");
    }
  };
  return (
    <>
      <div className="weather-info">
        <div className="weather-info__search">
          <input
            className="search"
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
            onKeyPress={search}
          />

          <label class="switch-wrap">
            <input
              type="checkbox"
              checked={isCelsius}
              onChange={() => {
                setCelsius(!isCelsius);
              }}
            />
            <div class="switch"></div>
          </label>
        </div>
        <div className="weather-info__date">
          <div className="date">
            <div className="date__wrapper">
              <p>{dateFilter("day")}</p>
              <p>{dateFilter("month")}</p>
            </div>
            <div className="date__place">
              {weather ? (
                <p>
                  {weather.name}, {weather.sys.country}
                </p>
              ) : (
                <p>None country</p>
              )}
            </div>
          </div>
        </div>
        {weather && (
          <div className="weather-info__degree">
            <h1>
              {temperature}
              <span>&deg;</span>
              {isCelsius ? "C" : "F"}
            </h1>
            <svg id="Layer_1" viewBox="0 0 485 485" fill="#DE9E45">
              <path
                d="M485,257.5v-30h-73.843c-3.126-35.441-17.213-67.78-38.847-93.597l52.27-52.269L403.367,60.42l-52.27,52.27
              C325.28,91.056,292.941,76.969,257.5,73.843V0h-30v73.843c-35.441,3.126-67.78,17.213-93.597,38.847l-52.27-52.27L60.42,81.633
              l52.27,52.269C91.056,159.72,76.969,192.059,73.843,227.5H0v30h73.843c3.126,35.441,17.213,67.78,38.847,93.597l-52.27,52.269
              l21.213,21.213l52.27-52.27c25.818,21.634,58.156,35.721,93.597,38.847V485h30v-73.843c35.441-3.126,67.78-17.213,93.597-38.847
              l52.27,52.27l21.213-21.213l-52.27-52.269c21.634-25.818,35.721-58.156,38.847-93.597H485z M242.5,381.829
              c-76.826,0-139.329-62.503-139.329-139.329S165.674,103.171,242.5,103.171S381.829,165.674,381.829,242.5
              S319.326,381.829,242.5,381.829z"
              />
            </svg>
          </div>
        )}
        <div className="weather-info__weeks weeks">
          <WeekDay />
          <WeekDay />
          <WeekDay />
          <WeekDay />
          <WeekDay />
          <WeekDay />
          <WeekDay />
        </div>
      </div>
    </>
  );
};
export default Weather;
