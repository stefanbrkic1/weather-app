import getWeatherData from './weather-api';
import { addSearchButton, removeSearchButton } from './dom';

const searchFormForecast = document.getElementById('searchFormForecast');
const searchBarForecast = document.getElementById('searchBarForecast');
const searchBtnForecast = document.getElementById('searchBtnForecast');

function handleSearchInput() {
  searchBarForecast.addEventListener('input', () => {
    if (searchBarForecast.value !== '') {
      addSearchButton(searchBtnForecast);
    } else {
      removeSearchButton(searchBtnForecast);
    }
  });
}

function getLocationValue() {
  const inputValue = searchBarForecast.value;
  return inputValue.trim().toLowerCase();
}

function resetInput() {
  searchBarForecast.value = '';
  searchBarForecast.blur();
}

function handleSearchSubmit() {
  searchFormForecast.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherData(getLocationValue(), 'metric')
      .then((weatherData) => {
        console.log(weatherData);
        localStorage.setItem('weatherData', JSON.stringify(weatherData));
        resetInput();
      })
      .catch((error) => {
        throw new Error('WeatherDataError', error);
      });
  });
}

export default function handleForecastSearch() {
  handleSearchInput();
  handleSearchSubmit();
}
