import getWeatherData from './weather-api';
import { displayWeatherData, transitionForecast } from './dom';

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

function resetInput(searchBar) {
  const currentSearchBar = searchBar;
  currentSearchBar.value = '';
  currentSearchBar.blur();
}

function handleSearchError(error, searchForm, searchBar) {
  const currentSearchBar = searchBar;
  currentSearchBar.value = '';
  currentSearchBar.setCustomValidity('Location not found, try again');
  searchForm.reportValidity();
}

function handleInputValidation(searchBar, page) {
  if (page === 'index') {
    searchBar.setCustomValidity('');
  } else if (page === 'forecast') {
    searchBar.setCustomValidity('');
  }
}

function handleIndexWeatherData(weatherData) {
  localStorage.setItem('weatherData', JSON.stringify(weatherData));
  window.location.href = './weather.html';
}

function handleForecastTransition(weatherData) {
  transitionForecast();
  setTimeout(() => {
    displayWeatherData(weatherData);
  }, 1000);
}

function handleForecastWeatherData(weatherData, searchBar) {
  handleForecastTransition(weatherData);
  localStorage.setItem('weatherData', JSON.stringify(weatherData));
  resetInput(searchBar);
}

function handleWeatherDataFetch(searchForm, searchBar, page) {
  getWeatherData(getLocationValue(searchBar), 'metric')
    .then((weatherData) => {
      if (page === 'index') {
        handleIndexWeatherData(weatherData, searchBar);
      } else if (page === 'forecast') {
        handleForecastWeatherData(weatherData, searchBar);
      }
    })
    .catch((error) => {
      handleSearchError(error, searchForm, searchBar);
    });
}

export default function handleSearchForm(searchForm, searchBar, page) {
  searchBar.addEventListener('input', () => {
    capitalizeFirstCharacter(searchBar);
    handleInputValidation(searchBar, page);
  });

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleWeatherDataFetch(searchForm, searchBar, page);
  });
}
