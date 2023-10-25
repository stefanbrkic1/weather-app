import getWeatherData from './weather-api';
import { displayWeatherData, transitionForecast } from './dom';

const searchFormIndex = document.getElementById('searchFormIndex');
const searchBarIndex = document.getElementById('searchBarIndex');
const searchFormForecast = document.getElementById('searchFormForecast');
const searchBarForecast = document.getElementById('searchBarForecast');

function capitalizeFirstCharacter(searchBar) {
  const inputValue = searchBar.value;
  const currentSearchBar = searchBar;

  if (inputValue.length > 0) {
    currentSearchBar.value =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  }
}

function getLocationValue(searchBar) {
  return searchBar.value.trim().toLowerCase();
}

function resetInput() {
  searchBarForecast.value = '';
  searchBarForecast.blur();
}

export function handleIndexSearchBar() {
  searchBarIndex.addEventListener('input', () => {
    capitalizeFirstCharacter(searchBarIndex);
  });
  searchFormIndex.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherData(getLocationValue(searchBarIndex), 'metric')
      .then((weatherData) => {
        localStorage.setItem('weatherData', JSON.stringify(weatherData));
        window.location.href = './weather.html';
      })
      .catch((error) => {
        throw new Error('WeatherDataError', error);
      });
  });
}

export function handleForecastSearch() {
  searchBarForecast.addEventListener('input', () => {
    capitalizeFirstCharacter(searchBarForecast);
  });
  searchFormForecast.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherData(getLocationValue(searchBarForecast), 'metric')
      .then((weatherData) => {
        transitionForecast();
        setTimeout(() => {
          displayWeatherData(weatherData);
        }, 1000);
        localStorage.setItem('weatherData', JSON.stringify(weatherData));
        resetInput();
      })
      .catch((error) => {
        throw new Error('WeatherDataError', error);
      });
  });
}
