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
const feelsLike = document.getElementById('thermalSensation');
const rainProbability = document.getElementById('rainProbability');
const windSpeed = document.getElementById('windSpeed');
const airHumidity = document.getElementById('airHumidity');
const uvIndex = document.getElementById('uvIndex');
const futureForecastContainers = document.querySelectorAll('.day-forecast');
const dayContainers = document.querySelectorAll('.day');
const smallScreenMediaQuery = window.matchMedia('(max-width: 768px)');

export function transitionForecast() {
  const forecast = document.querySelector('.forecast');
  forecast.classList.add('opacity-active');
  setTimeout(() => {
    forecast.classList.remove('opacity-active');
    forecast.classList.add('opacity-forecast');
  }, 1000);
}

function getNext5Weekdays(timeZone) {
  const currentDate = new Date();
  const next5Days = Array.from({ length: 5 }, (_, i) => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i + 1);
    return format(nextDate, 'eeee', { timeZone });
  });

  return next5Days;
}

function changeWeekdayTextLength(mediaQuery, weatherData) {
  const days = getNext5Weekdays(weatherData.timezone);
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

export function handleWeekDaysTextLength(weatherData) {
  smallScreenMediaQuery.addEventListener('change', () => {
    changeWeekdayTextLength(smallScreenMediaQuery, weatherData);
  });
}

function getCurrentDate(timeZone) {
  const currentDate = new Date();
  return format(currentDate, 'eeee, MMMM dd, yyyy', { timeZone });
}

function currentMinMaxString(weatherData) {
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

function getDefaultIconURL(iconID) {
  return `http://openweathermap.org/img/wn/${iconID}@2x.png`;
}

function getFutureWeatherIconURL(weatherData, index) {
  const weatherDescription = weatherData.weatherDescriptions[index + 1];
  const defaultURL = getDefaultIconURL(
    weatherData.daily[index + 1].weather[0].icon,
  );
  const customURL = weatherIconMap[weatherDescription];

  return customURL || defaultURL;
}

function getCurrentWeatherIconURL(weatherData) {
  const weatherDescription = weatherData.current.weather[0].description;
  const timeOfDay = weatherData.current.weather[0].icon.slice(2, 3);
  const defaultURL = getDefaultIconURL(weatherData.daily[0].weather[0].icon);
  const dayIconURL = weatherIconMap[weatherDescription] || defaultURL;
  const nightIconURL = nightWeatherIconMap[weatherDescription] || defaultURL;
  const imageURL = timeOfDay === 'd' ? dayIconURL : nightIconURL;

  return imageURL;
}

function getCurrentWeatherImageURL(weatherData) {
  const weatherDescription = weatherData.current.weather[0].description;
  const timeOfDay = weatherData.current.weather[0].icon.slice(2, 3);
  const dayImageURL = weatherImageMap[weatherDescription];
  const nightImageURL = nightWeatherImageMap[weatherDescription];
  const imageURL = timeOfDay === 'd' ? dayImageURL : nightImageURL;

  return imageURL;
}

function setTextContent(element, text) {
  const currentElement = element;
  currentElement.textContent = text;
}

function minOrMaxTempString(weatherData, index, minOrMax) {
  return `${Math.round(weatherData.daily[index + 1].temp[minOrMax])}°c`;
}

function setBackgroundURL(element, url) {
  const modyfyingElement = element;
  modyfyingElement.style.background = `url(${url})`;
}

function displayDailyWeatherData(weatherData) {
  const days = getNext5Weekdays(weatherData.timezone);

  futureForecastContainers.forEach((container, index) => {
    const futureDay = container.querySelector('.day');
    const futureIcon = container.querySelector('.weather-image');
    const futureWeather = container.querySelector('.weather-description');
    const futureMinTemp = container.querySelector('.day-min');
    const futureMaxTemp = container.querySelector('.day-max');

    setBackgroundURL(
      futureIcon,
      `${getFutureWeatherIconURL(weatherData, index)}`,
    );
    setTextContent(futureDay, days[index]);
    setTextContent(futureWeather, weatherData.daily[index + 1].weather[0].main);
    setTextContent(
      futureMinTemp,
      minOrMaxTempString(weatherData, index, 'min'),
    );
    setTextContent(
      futureMaxTemp,
      minOrMaxTempString(weatherData, index, 'max'),
    );
  });
  changeWeekdayTextLength(smallScreenMediaQuery, weatherData);
}

export function displayWeatherData(weatherData) {
  setBackgroundURL(
    currentWeatherBox,
    `${getCurrentWeatherImageURL(weatherData)}`,
  );
  setBackgroundURL(
    currentWeatherIcon,
    `${getCurrentWeatherIconURL(weatherData)}`,
  );
  setTextContent(location, `${weatherData.name}, ${weatherData.country}`);
  setTextContent(date, getCurrentDate(weatherData.timezone));
  setTextContent(temp, `${Math.round(weatherData.current.temp)}`);
  setTextContent(description, `${createDescriptionString(weatherData)}`);
  setTextContent(minMaxTempContainer, `${currentMinMaxString(weatherData)}`);
  setTextContent(clock, weatherData.localTime);
  setTextContent(feelsLike, `${Math.round(weatherData.current.feels_like)}°c`);
  setTextContent(windSpeed, `${weatherData.current.wind_speed} km/h`);
  setTextContent(airHumidity, `${weatherData.current.humidity}%`);
  setTextContent(uvIndex, `${Math.round(weatherData.current.uvi)}`);
  setTextContent(
    rainProbability,
    `${(weatherData.daily[0].pop * 100).toFixed()}%`,
  );
  displayDailyWeatherData(weatherData);
}
