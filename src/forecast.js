import './styles/style.css';
import handleForecastSearch from './modules/search-forecast';
import { transitionForecast, setWeatherData, handleText } from './modules/dom';

window.onload = () => {
  const weatherData = JSON.parse(localStorage.getItem('weatherData'));
  transitionForecast();
  handleForecastSearch();
  setWeatherData(weatherData);
  handleText(weatherData);
};
