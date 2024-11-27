import React from "react";
import { WeatherCardContainer, CardTitle } from "./WeatherCard.style"; // Importando os estilos

const WeatherCard = ({ currentWeather, unit }) => {
  if (!currentWeather) {
    return null; // Não renderiza nada se `currentWeather` for nulo/indefinido
  }

  return (
    <WeatherCardContainer>
      <CardTitle>Current Weather</CardTitle>
      <p>
        Temperature: {currentWeather.temp}°{unit === "metric" ? "C" : "F"}
        <br />
        Condition: {currentWeather.description}
        <br />
        Humidity: {currentWeather.humidity}%
        <br />
        Wind Speed: {currentWeather.windSpeed} m/s
      </p>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
