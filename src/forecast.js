import './styles/style.css';
import {
  transitionForecast,
  displayWeatherData,
  handleWeekDaysTextLength,
} from './modules/dom';
import handleSearchForm from './modules/search-bars';

const searchFormForecast = document.getElementById('searchFormForecast');
const searchBarForecast = document.getElementById('searchBarForecast');

document.addEventListener('DOMContentLoaded', () => {
  const weatherData = JSON.parse(localStorage.getItem('weatherData'));
  transitionForecast();
  handleSearchForm(searchFormForecast, searchBarForecast, 'forecast');
  displayWeatherData(weatherData);
  handleWeekDaysTextLength(weatherData);
});
