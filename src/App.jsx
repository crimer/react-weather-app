import React, { useReducer } from "react";
import Weather from "./components/Weather/Weather";
import "./index.scss";
import { Context } from "./context.js";
import reducer from "./reducer.js";

const App = () => {
  // const [state, dispatch] = useReducer(reducer, []);

  return (
    // <Context.Provider>
      <div className="weather">
        <section className="weather__wrapper">
          <Weather />
          <div className="weather-picture weather-sunny"></div>
        </section>
      </div>
    // </Context.Provider>
  );
};

export default App;
