import format from 'date-fns/format';
import clearSkyImage from '../img/weather-icons/clear.png';
import fewCloudsImage from '../img/weather-icons/few-clouds.png';
import brokenCloudsImage from '../img/weather-icons/broken-clouds.png';
import overcastCloudsImage from '../img/weather-icons/overcast-clouds.png';
import lightRainImage from '../img/weather-icons/light-rain.png';
import rainImage from '../img/weather-icons/rain.png';
import moderateRainImage from '../img/weather-icons/moderate-rain.png';
import snowImage from '../img/weather-icons/snow.png';
import mistImage from '../img/weather-icons/mist.png';
import heavyRainStormImage from '../img/weather-icons/heavy-rain-storm.png';
import heavyRainImage from '../img/weather-icons/heavy-rain.png';
import thunderstormImage from '../img/weather-icons/thunder.png';

const location = document.getElementById('location');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const currentWeatherIcon = document.getElementById('currentWeatherIcon');
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

function createDescriptionString(weatherData) {
  return `${Math.round(weatherData.daily[0].temp.min)}°c / ${Math.round(
    weatherData.daily[0].temp.max,
  )}°c, ${weatherData.current.weather[0].main}`;
}

const weatherImageMap = {
  'clear sky': clearSkyImage,
  'few clouds': fewCloudsImage,
  'scattered clouds': brokenCloudsImage,
  'broken clouds': brokenCloudsImage,
  'overcast clouds': overcastCloudsImage,
  'light rain': lightRainImage,
  'moderate rain': moderateRainImage,
  'heavy rain': rainImage,
  'heavy intensity rain': heavyRainImage,
  'very heavy rain': heavyRainImage,
  'extreme rain': heavyRainImage,
  'freezing rain': snowImage,
  'rain and snow': snowImage,
  'light intensity shower rain': rainImage,
  'shower rain': rainImage,
  'heavy intensity shower rain': rainImage,
  'ragged shower rain': rainImage,
  'light thunderstorm': thunderstormImage,
  'heavy thunderstorm': thunderstormImage,
  'ragged thunderstorm': thunderstormImage,
  'thunderstorm with light drizzle': thunderstormImage,
  'thunderstorm with drizzle': thunderstormImage,
  'thunderstorm with heavy drizzle': thunderstormImage,
  'thunderstorm with light rain': thunderstormImage,
  'thunderstorm with rain': heavyRainStormImage,
  'thunderstorm with heavy rain': heavyRainStormImage,
  'light snow': snowImage,
  'heavy snow': snowImage,
  'light shower sleet': snowImage,
  'shower sleet': snowImage,
  'light rain and snow': snowImage,
  'heavy shower snow': snowImage,
  'light shower snow': snowImage,
  'shower snow': snowImage,
  'sand/dust whirls': mistImage,
  'volcanic ash': mistImage,
  sleet: snowImage,
  mist: mistImage,
  squalls: mistImage,
  tornado: mistImage,
  fog: mistImage,
  sand: mistImage,
  dust: mistImage,
  smoke: mistImage,
  haze: mistImage,
  snow: snowImage,
  thunderstorm: thunderstormImage,
};

function getFutureWeatherImageURL(weatherData, index) {
  const weatherDescription = weatherData.weatherDescriptions[index + 1];
  const imageURL =
    weatherImageMap[weatherDescription] ||
    `http://openweathermap.org/img/wn/${
      weatherData.daily[index + 1].weather[0].icon
    }@2x.png`;

  return imageURL;
}

function getCurrentWeatherImageURL(weatherData) {
  const weatherDescription = weatherData.current.weather[0].description;
  const imageURL =
    weatherImageMap[weatherDescription] ||
    `http://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}@2x.png`;

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
    futureImage.style.background = `url(${getFutureWeatherImageURL(
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
  location.textContent = `${weatherData.name}, ${weatherData.country}`;
  date.textContent = `${getCurrentDate(weatherData.timezone)}`;
  temp.textContent = `${Math.round(weatherData.current.temp)}`;
  currentWeatherIcon.style.background = `url(${getCurrentWeatherImageURL(
    weatherData,
  )})`;
  description.textContent = createDescriptionString(weatherData);
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