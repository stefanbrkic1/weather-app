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

let isIndexInputInvalid = false;

export function handleIndexSearchBar() {
  searchBarIndex.addEventListener('input', () => {
    capitalizeFirstCharacter(searchBarIndex);

    if (isIndexInputInvalid) {
      searchBarIndex.setCustomValidity('');
      isIndexInputInvalid = false;
    }
  });
  searchFormIndex.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherData(getLocationValue(searchBarIndex), 'metric')
      .then((weatherData) => {
        searchBarIndex.setCustomValidity('');
        isIndexInputInvalid = false;
        localStorage.setItem('weatherData', JSON.stringify(weatherData));
        window.location.href = './weather.html';
      })
      .catch((error) => {
        console.error('WeatherDataError', error);
        searchBarIndex.value = '';
        searchBarIndex.setCustomValidity('Location not found, try again');
        searchFormIndex.reportValidity();
        isIndexInputInvalid = true;
      });
  });
}

let isForecastInputInvalid = false;

export function handleForecastSearch() {
  searchBarForecast.addEventListener('input', () => {
    capitalizeFirstCharacter(searchBarForecast);

    if (isForecastInputInvalid) {
      searchBarForecast.setCustomValidity('');
      isForecastInputInvalid = false;
    }
  });
  searchFormForecast.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherData(getLocationValue(searchBarForecast), 'metric')
      .then((weatherData) => {
        isForecastInputInvalid = false;
        transitionForecast();
        setTimeout(() => {
          displayWeatherData(weatherData);
        }, 1000);
        localStorage.setItem('weatherData', JSON.stringify(weatherData));
        resetInput();
      })
      .catch((error) => {
        console.error('WeatherDataError', error);
        searchBarForecast.value = '';
        searchBarForecast.setCustomValidity('Location not found, try again');
        searchFormForecast.reportValidity();
        isForecastInputInvalid = true;
      });
  });
}
