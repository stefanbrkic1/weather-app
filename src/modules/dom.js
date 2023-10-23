import format from 'date-fns/format';

const location = document.getElementById('location');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const description = document.getElementById('weatherDescription');
const clock = document.getElementById('clock');

export function addSearchButton(searchBtn) {
  searchBtn.classList.remove('opacity-active');
}

export function removeSearchButton(searchBtn) {
  searchBtn.classList.add('opacity-active');
}

export function transitionForecast() {
  const forecast = document.querySelector('.forecast');
  forecast.classList.add('opacity-active');
  setTimeout(() => {
    forecast.classList.remove('opacity-active');
    forecast.classList.add('opacity-forecast');
  }, 1000);
}

function getCurrentDate() {
  const currentDate = new Date();
  return format(currentDate, 'eeee, MMMM dd, yyyy');
}

function getMinTemp(weatherData) {
  const minTemp = weatherData.hourly.reduce(
    (min, current) => Math.min(min, current.temp),
    weatherData.hourly[0].temp,
  );
  return Math.round(minTemp);
}

function getMaxTemp(weatherData) {
  const maxTemp = weatherData.hourly.reduce(
    (max, current) => Math.max(max, current.temp),
    weatherData.hourly[0].temp,
  );
  return Math.round(maxTemp);
}

function createDescriptionString(weatherData) {
  return `${getMinTemp(weatherData)}°c / ${getMaxTemp(weatherData)}°c, ${
    weatherData.current.weather[0].main
  }`;
}

export function setWeatherData(weatherData) {
  location.textContent = `${weatherData.name}, ${weatherData.country}`;
  date.textContent = `${getCurrentDate()}`;
  temp.textContent = `${Math.round(weatherData.current.temp)}`;
  description.textContent = createDescriptionString(weatherData);
  clock.textContent = weatherData.localTime;
}
