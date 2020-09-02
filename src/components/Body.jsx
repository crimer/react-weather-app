import React from "react";

const Body = ({weather}) => {

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

  return (
    <div className="weather-info__body">
      <div className="weather-info__date">
        <div className="date">
          <div className="date__wrapper">
            <p>{dateFilter("day")}</p>
            <p>{dateFilter("month")}</p>
          </div>
          <div className="date__place">
            {weather.city && weather.country ? (
              <p>
                {weather.city}, {weather.country}
              </p>
            ) : (
              <p>None country</p>
            )}
          </div>
        </div>
      </div>
      {weather.temp && (
        <div className="weather-info__degree">
          <h1>
            {weather.temp}
            <span>&deg;</span>
            {weather.isCelsius ? "C" : "F"}
          </h1>
          <i className="wi wi-day-sunny"></i>
        </div>
      )}
    </div>
  );
};
export default Body;
