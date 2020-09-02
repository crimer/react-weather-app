const apiKey = process.env.REACT_APP_OPEN_WEATHER_API;

export const getWeather = async (query) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`
    );  
    const data = await res.json();
    return data;
  } catch (er) {
    console.log("fetch error", er);
  }
};
