import getWeatherData from './weather-api';
import { addSearchButton, removeSearchButton } from './dom';

const searchFormIndex = document.getElementById('searchFormIndex');
const searchBarIndex = document.getElementById('searchBarIndex');
const searchBtnIndex = document.getElementById('searchBtnIndex');

function handleSearchInput() {
  searchBarIndex.addEventListener('input', () => {
    if (searchBarIndex.value !== '') {
      addSearchButton(searchBtnIndex);
    } else {
      removeSearchButton(searchBtnIndex);
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
        localStorage.setItem('weatherData', JSON.stringify(weatherData));
        window.location.href = './weather.html';
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
