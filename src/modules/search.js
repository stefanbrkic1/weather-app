import getWeatherData from './weather-api';
import { addSearchButton, removeSearchButton } from './dom';

const searchFormIndex = document.getElementById('searchFormIndex');
const searchBarIndex = document.getElementById('searchBarIndex');

function handleSearchInput() {
  searchBarIndex.addEventListener('input', () => {
    if (searchBarIndex.value !== '') {
      addSearchButton();
    } else {
      removeSearchButton();
    }
  });
}

function getLocationValue() {
  const inputValue = searchBarIndex.value;
  return inputValue.trim().toLowerCase();
}

function handleSearchSubmit() {
  searchFormIndex.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherData(getLocationValue(), 'metric')
      .then((weatherData) => {
        console.log(weatherData);
      })
      .catch((error) => {
        throw new Error('WeatherDataError', error);
      });
  });
}

export default function handleSearch() {
  handleSearchInput();
  handleSearchSubmit();
}
