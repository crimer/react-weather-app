import React, { useEffect, useState } from "react";
import { Body, Loader } from "./components/index";
import "./index.scss";
import { getWeather } from "./utils/api";

const App = () => {
  const [weather, setWeather] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const cities = [
    "Vladivostok",
    "Boston",
    "Madrid",
    "Australia",
    "Finland",
    "Norway",
    "Italy",
  ];

  const search = async (e) => {
    if (e.key === "Enter") {
      await fetchData(searchQuery);
      setSearchQuery("");
    }
  };

  const fetchData = async (country) => {
    setLoading(true);
    let city = cities[Math.floor(Math.random() * cities.length)];
    let res;
    if (!country) {
      res = await getWeather(city);
    } else {
      res = await getWeather(country);
    }
    setWeather({
      city: res.name,
      country: res.sys.country,
      icon: res.weather[0].icon,
      temp: res.main.temp,
      temp_min: res.main.temp_min,
      temp_max: res.main.temp_max,
      description: res.weather[0].description,
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="weather">
      {loading ? (
        <Loader />
      ) : (
        <section className="weather__wrapper">
          <div className="weather-info">
            <div className="weather-info__header header-search">
              <input
                className="header-search__input"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                onKeyPress={search}
              />
            </div>
            <Body weather={weather} />
          </div>
          <aside className="weather-picture weather-sunny"></aside>
        </section>
      )}
    </div>
  );
};

export default App;
