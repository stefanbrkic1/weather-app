import getWeatherData from './weather-api';
import { setWeatherData, transitionForecast } from './dom';

const searchFormForecast = document.getElementById('searchFormForecast');
const searchBarForecast = document.getElementById('searchBarForecast');

function capitalizeFirstCharacter() {
  const inputValue = searchBarForecast.value;

  if (inputValue.length > 0) {
    searchBarForecast.value =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  }
}

searchBarForecast.addEventListener('input', capitalizeFirstCharacter);

function getLocationValue() {
  const inputValue = searchBarForecast.value;
  return inputValue.trim().toLowerCase();
}

function resetInput() {
  searchBarForecast.value = '';
  searchBarForecast.blur();
}

export default function handleForecastSearch() {
  searchFormForecast.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherData(getLocationValue(), 'metric')
      .then((weatherData) => {
        console.log(weatherData);
        transitionForecast();
        setTimeout(() => {
          setWeatherData(weatherData);
        }, 1000);
        localStorage.setItem('weatherData', JSON.stringify(weatherData));
        resetInput();
      })
      .catch((error) => {
        throw new Error('WeatherDataError', error);
      });
  });
}
