import './styles/style.css';
import handleForecastSearch from './modules/search-forecast';
import { transitionForecast, setWeatherData } from './modules/dom';

function setDataFromStorage() {
  const weatherData = JSON.parse(localStorage.getItem('weatherData'));
  setWeatherData(weatherData);
}

window.onload = () => {
  transitionForecast();
  handleForecastSearch();
  setDataFromStorage();
};
