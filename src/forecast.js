import './styles/style.css';
import {
  transitionForecast,
  displayWeatherData,
  handleText,
} from './modules/dom';
import { handleForecastSearch } from './modules/search-bars';

window.onload = () => {
  const weatherData = JSON.parse(localStorage.getItem('weatherData'));
  transitionForecast();
  handleForecastSearch();
  displayWeatherData(weatherData);
  handleText(weatherData);
};
