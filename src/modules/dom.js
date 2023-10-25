import format from 'date-fns/format';
import {
  weatherIconMap,
  nightWeatherIconMap,
  weatherImageMap,
  nightWeatherImageMap,
} from './weather-images';

const currentWeatherBox = document.getElementById('currentWeatherBox');
const location = document.getElementById('location');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const currentWeatherIcon = document.getElementById('currentWeatherIcon');
const minMaxTempContainer = document.getElementById('minMaxTemp');
const description = document.getElementById('weatherDescription');
const clock = document.getElementById('clock');
const thermalSensation = document.getElementById('thermalSensation');
const rainProbability = document.getElementById('rainProbability');
const windSpeed = document.getElementById('windSpeed');
const airHumidity = document.getElementById('airHumidity');
const uvIndex = document.getElementById('uvIndex');
const futureForecastContainers = document.querySelectorAll('.day-forecast');
const dayContainers = document.querySelectorAll('.day');

export function transitionForecast() {
  const forecast = document.querySelector('.forecast');
  forecast.classList.add('opacity-active');
  setTimeout(() => {
    forecast.classList.remove('opacity-active');
    forecast.classList.add('opacity-forecast');
  }, 1000);
}

function getFutureDays(timeZone) {
  const currentDate = new Date();
  const next5Days = [];

  for (let i = 1; i <= 5; i += 1) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);
    next5Days.push(format(nextDate, 'eeee', { timeZone }));
  }

  return next5Days;
}

const smallScreenMediaQuery = window.matchMedia('(max-width: 768px)');

function changeDayTextLength(mediaQuery, weatherData) {
  const days = getFutureDays(weatherData.timezone);
  if (mediaQuery.matches) {
    dayContainers.forEach((day, index) => {
      const currentDay = day;
      currentDay.textContent = days[index].slice(0, 3);
    });
  } else {
    dayContainers.forEach((day, index) => {
      const currentDay = day;
      currentDay.textContent = days[index];
    });
  }
}

export function handleText(weatherData) {
  changeDayTextLength(smallScreenMediaQuery, weatherData);
  smallScreenMediaQuery.addEventListener('change', () => {
    changeDayTextLength(smallScreenMediaQuery, weatherData);
  });
}

function getCurrentDate(timeZone) {
  const currentDate = new Date();
  return format(currentDate, 'eeee, MMMM dd, yyyy', { timeZone });
}

function createMinMaxString(weatherData) {
  return `${Math.round(weatherData.daily[0].temp.min)}°c / ${Math.round(
    weatherData.daily[0].temp.max,
  )}°c`;
}

function createDescriptionString(weatherData) {
  const weatherDescription = weatherData.current.weather[0].description;
  return weatherDescription
    .split(' ')
    .map(
      (string) =>
        `${string.charAt(0).toUpperCase() + string.slice(1, string.length)}`,
    )
    .join(' ');
}

function getFutureWeatherIconURL(weatherData, index) {
  const weatherDescription = weatherData.weatherDescriptions[index + 1];
  const imageURL =
    weatherIconMap[weatherDescription] ||
    `http://openweathermap.org/img/wn/${
      weatherData.daily[index + 1].weather[0].icon
    }@2x.png`;

  return imageURL;
}

function getCurrentWeatherIconURL(weatherData) {
  const weatherDescription = weatherData.current.weather[0].description;
  const timeOfDay = weatherData.current.weather[0].icon.slice(2, 3);
  let imageURL = '';
  if (timeOfDay === 'd') {
    imageURL =
      weatherIconMap[weatherDescription] ||
      `http://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}@2x.png`;
  } else {
    imageURL =
      nightWeatherIconMap[weatherDescription] ||
      `http://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}@2x.png`;
  }
  return imageURL;
}

function getCurrentWeatherImageURL(weatherData) {
  const weatherDescription = weatherData.current.weather[0].description;
  const timeOfDay = weatherData.current.weather[0].icon.slice(2, 3);
  let imageURL = '';
  if (timeOfDay === 'd') {
    imageURL = weatherImageMap[weatherDescription];
  } else {
    imageURL = nightWeatherImageMap[weatherDescription];
  }
  return imageURL;
}

function setFutureWeatherData(weatherData) {
  const days = getFutureDays(weatherData.timezone);

  futureForecastContainers.forEach((container, index) => {
    const futureDay = container.querySelector('.day');
    const futureImage = container.querySelector('.weather-image');
    const futureWeather = container.querySelector('.weather-description');
    const futureMinTemp = container.querySelector('.day-min');
    const futureMaxTemp = container.querySelector('.day-max');

    futureDay.textContent = days[index];
    futureImage.style.background = `url(${getFutureWeatherIconURL(
      weatherData,
      index,
    )})`;
    futureWeather.textContent = weatherData.daily[index + 1].weather[0].main;
    futureMinTemp.textContent = `${Math.round(
      weatherData.daily[index + 1].temp.min,
    )}°c`;
    futureMaxTemp.textContent = `${Math.round(
      weatherData.daily[index + 1].temp.max,
    )}°c`;
  });
}

function setCurrentWeatherData(weatherData) {
  currentWeatherBox.style.background = `url(${getCurrentWeatherImageURL(
    weatherData,
  )})`;
  location.textContent = `${weatherData.name}, ${weatherData.country}`;
  date.textContent = `${getCurrentDate(weatherData.timezone)}`;
  temp.textContent = `${Math.round(weatherData.current.temp)}`;
  currentWeatherIcon.style.background = `url(${getCurrentWeatherIconURL(
    weatherData,
  )})`;
  description.textContent = `${createDescriptionString(weatherData)}`;
  minMaxTempContainer.textContent = `${createMinMaxString(weatherData)}`;
  clock.textContent = weatherData.localTime;
  thermalSensation.textContent = `${Math.round(
    weatherData.current.feels_like,
  )}°c`;
  rainProbability.textContent = `${weatherData.daily[0].pop * 100}%`;
  windSpeed.textContent = `${weatherData.current.wind_speed} km/h`;
  airHumidity.textContent = `${weatherData.current.humidity}%`;
  uvIndex.textContent = `${Math.round(weatherData.current.uvi)}`;
}

export function setWeatherData(weatherData) {
  setCurrentWeatherData(weatherData);
  setFutureWeatherData(weatherData);
}
