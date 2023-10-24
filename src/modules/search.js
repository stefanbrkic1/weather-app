import getWeatherData from './weather-api';

const searchFormIndex = document.getElementById('searchFormIndex');
const searchBarIndex = document.getElementById('searchBarIndex');

function getLocationValue() {
  const inputValue = searchBarIndex.value;
  return inputValue.trim().toLowerCase();
}

export default function handleSearch() {
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
