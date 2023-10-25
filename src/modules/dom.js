import format from 'date-fns/format';
import clearSkyIcon from '../img/weather-icons/clear.png';
import fewCloudsIcon from '../img/weather-icons/few-clouds.png';
import brokenCloudsIcon from '../img/weather-icons/sunny-clouds.png';
import overcastCloudsIcon from '../img/weather-icons/overcast-clouds.png';
import lightRainIcon from '../img/weather-icons/light-rain.png';
import moderateRainIcon from '../img/weather-icons/moderate-rain.png';
import rainIcon from '../img/weather-icons/rain.png';
import snowIcon from '../img/weather-icons/snow.png';
import mistIcon from '../img/weather-icons/mist.png';
import heavyRainStormIcon from '../img/weather-icons/heavy-rain-storm.png';
import heavyRainIcon from '../img/weather-icons/heavy-rain.png';
import thunderstormIcon from '../img/weather-icons/thunder.png';
import clearNightIcon from '../img/weather-icons/night-clear.png';
import fewCloudsNightIcon from '../img/weather-icons/night-few-clouds.png';
import cloudsNightImage from '../img/weather-icons/night-cloudy.png';
import rainNightIcon from '../img/weather-icons/night-rain.png';
import heavyNightRainIcon from '../img/weather-icons/night-heavy-rain.png';
import lightrainNightIcon from '../img/weather-icons/night-light-rain.png';
import overcastCloudsNightIcon from '../img/weather-icons/night-overcast-clouds.png';
import clearSkyImage from '../img/weather-images/day-clear-sky.png';
import fewCloudsImage from '../img/weather-images/day-few-clouds.png';
import overcastCloudsImage from '../img/weather-images/day-overcast-clouds.png';
import heavyRainImage from '../img/weather-images/day-heavy-rain.png';
import dustSandImage from '../img/weather-images/dust-sand.png';
import fogImage from '../img/weather-images/fog.png';
import mistImage from '../img/weather-images/mist.png';
import snowImage from '../img/weather-images/day-snow.png';
import nightClearSkyImage from '../img/weather-images/night-clear-sky.png';
import nightfewCloudsImage from '../img/weather-images/night-few-clouds.png';
import nightOvercastCloudsImage from '../img/weather-images/night-overcast-clouds.png';
import nightThunderImage from '../img/weather-images/night-thunder.png';

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

const weatherIconMap = {
  'clear sky': clearSkyIcon,
  'few clouds': fewCloudsIcon,
  'scattered clouds': brokenCloudsIcon,
  'broken clouds': brokenCloudsIcon,
  'overcast clouds': overcastCloudsIcon,
  'light rain': lightRainIcon,
  'moderate rain': moderateRainIcon,
  'heavy rain': rainIcon,
  'heavy intensity rain': heavyRainIcon,
  'very heavy rain': heavyRainIcon,
  'extreme rain': heavyRainIcon,
  'freezing rain': heavyRainIcon,
  'rain and snow': snowIcon,
  'light intensity shower rain': heavyRainIcon,
  'shower rain': heavyRainIcon,
  'heavy intensity shower rain': heavyRainIcon,
  'ragged shower rain': heavyRainIcon,
  'light thunderstorm': thunderstormIcon,
  'heavy thunderstorm': thunderstormIcon,
  'ragged thunderstorm': thunderstormIcon,
  'thunderstorm with light drizzle': thunderstormIcon,
  'thunderstorm with drizzle': thunderstormIcon,
  'thunderstorm with heavy drizzle': thunderstormIcon,
  'thunderstorm with light rain': thunderstormIcon,
  'thunderstorm with rain': heavyRainStormIcon,
  'thunderstorm with heavy rain': heavyRainStormIcon,
  'light snow': snowIcon,
  'heavy snow': snowIcon,
  'light shower sleet': snowIcon,
  'shower sleet': snowIcon,
  'light rain and snow': snowIcon,
  'heavy shower snow': snowIcon,
  'light shower snow': snowIcon,
  'shower snow': snowIcon,
  'sand/dust whirls': mistIcon,
  'volcanic ash': mistIcon,
  'light intensity drizzle': mistIcon,
  sleet: snowIcon,
  mist: mistIcon,
  squalls: mistIcon,
  tornado: mistIcon,
  fog: mistIcon,
  sand: mistIcon,
  dust: mistIcon,
  smoke: mistIcon,
  haze: mistIcon,
  snow: snowIcon,
  thunderstorm: thunderstormIcon,
};

const nightWeatherIconMap = {
  'clear sky': clearNightIcon,
  'few clouds': fewCloudsNightIcon,
  'scattered clouds': cloudsNightImage,
  'broken clouds': cloudsNightImage,
  'overcast clouds': overcastCloudsNightIcon,
  'light rain': lightrainNightIcon,
  'moderate rain': lightrainNightIcon,
  'heavy rain': heavyNightRainIcon,
  'heavy intensity rain': heavyNightRainIcon,
  'very heavy rain': heavyNightRainIcon,
  'extreme rain': heavyNightRainIcon,
  'freezing rain': snowIcon,
  'rain and snow': snowIcon,
  'light intensity shower rain': rainNightIcon,
  'shower rain': rainNightIcon,
  'heavy intensity shower rain': heavyNightRainIcon,
  'ragged shower rain': heavyNightRainIcon,
  'light thunderstorm': thunderstormIcon,
  'heavy thunderstorm': thunderstormIcon,
  'ragged thunderstorm': thunderstormIcon,
  'thunderstorm with light drizzle': thunderstormIcon,
  'thunderstorm with drizzle': thunderstormIcon,
  'thunderstorm with heavy drizzle': thunderstormIcon,
  'thunderstorm with light rain': thunderstormIcon,
  'thunderstorm with rain': heavyRainStormIcon,
  'thunderstorm with heavy rain': heavyRainStormIcon,
  'light snow': snowIcon,
  'heavy snow': snowIcon,
  'light shower sleet': snowIcon,
  'shower sleet': snowIcon,
  'light rain and snow': snowIcon,
  'heavy shower snow': snowIcon,
  'light shower snow': snowIcon,
  'shower snow': snowIcon,
  'sand/dust whirls': mistIcon,
  'volcanic ash': mistIcon,
  sleet: snowIcon,
  mist: mistIcon,
  squalls: mistIcon,
  tornado: mistIcon,
  fog: mistIcon,
  sand: mistIcon,
  dust: mistIcon,
  smoke: mistIcon,
  haze: mistIcon,
  snow: snowIcon,
  thunderstorm: thunderstormIcon,
};

const weatherImageMap = {
  'clear sky': clearSkyImage,
  'few clouds': fewCloudsImage,
  'scattered clouds': fewCloudsImage,
  'broken clouds': fewCloudsImage,
  'overcast clouds': overcastCloudsImage,
  'light rain': fewCloudsImage,
  'moderate rain': heavyRainImage,
  'heavy rain': heavyRainImage,
  'heavy intensity rain': heavyRainImage,
  'very heavy rain': heavyRainImage,
  'extreme rain': heavyRainImage,
  'freezing rain': heavyRainImage,
  'rain and snow': heavyRainImage,
  'light intensity shower rain': heavyRainImage,
  'shower rain': heavyRainImage,
  'heavy intensity shower rain': heavyRainImage,
  'ragged shower rain': heavyRainImage,
  'light thunderstorm': overcastCloudsImage,
  'heavy thunderstorm': overcastCloudsImage,
  'ragged thunderstorm': overcastCloudsImage,
  'thunderstorm with light drizzle': overcastCloudsImage,
  'thunderstorm with drizzle': overcastCloudsImage,
  'thunderstorm with heavy drizzle': overcastCloudsImage,
  'thunderstorm with light rain': overcastCloudsImage,
  'thunderstorm with rain': overcastCloudsImage,
  'thunderstorm with heavy rain': overcastCloudsImage,
  'light snow': snowImage,
  'heavy snow': snowImage,
  'light shower sleet': snowImage,
  'shower sleet': snowImage,
  'light rain and snow': snowImage,
  'heavy shower snow': snowImage,
  'light shower snow': snowImage,
  'shower snow': snowImage,
  'sand/dust whirls': dustSandImage,
  'volcanic ash': fogImage,
  sleet: mistImage,
  mist: mistImage,
  squalls: fogImage,
  tornado: fogImage,
  fog: fogImage,
  sand: dustSandImage,
  dust: dustSandImage,
  smoke: fogImage,
  haze: fogImage,
  snow: snowImage,
  thunderstorm: overcastCloudsImage,
};

const nightWeatherImageMap = {
  'clear sky': nightClearSkyImage,
  'few clouds': nightfewCloudsImage,
  'scattered clouds': nightfewCloudsImage,
  'broken clouds': nightfewCloudsImage,
  'overcast clouds': nightOvercastCloudsImage,
  'light rain': nightfewCloudsImage,
  'moderate rain': nightfewCloudsImage,
  'heavy rain': nightOvercastCloudsImage,
  'heavy intensity rain': nightOvercastCloudsImage,
  'very heavy rain': nightOvercastCloudsImage,
  'extreme rain': nightOvercastCloudsImage,
  'freezing rain': nightOvercastCloudsImage,
  'rain and snow': nightOvercastCloudsImage,
  'light intensity shower rain': nightOvercastCloudsImage,
  'shower rain': nightOvercastCloudsImage,
  'heavy intensity shower rain': nightOvercastCloudsImage,
  'ragged shower rain': nightOvercastCloudsImage,
  'light thunderstorm': nightThunderImage,
  'heavy thunderstorm': nightThunderImage,
  'ragged thunderstorm': nightThunderImage,
  'thunderstorm with light drizzle': nightThunderImage,
  'thunderstorm with drizzle': nightThunderImage,
  'thunderstorm with heavy drizzle': nightThunderImage,
  'thunderstorm with light rain': nightThunderImage,
  'thunderstorm with rain': nightThunderImage,
  'thunderstorm with heavy rain': nightThunderImage,
  'light snow': nightOvercastCloudsImage,
  'heavy snow': nightOvercastCloudsImage,
  'light shower sleet': nightOvercastCloudsImage,
  'shower sleet': nightOvercastCloudsImage,
  'light rain and snow': nightOvercastCloudsImage,
  'heavy shower snow': nightOvercastCloudsImage,
  'light shower snow': nightOvercastCloudsImage,
  'shower snow': nightOvercastCloudsImage,
  'sand/dust whirls': dustSandImage,
  'volcanic ash': fogImage,
  sleet: mistImage,
  mist: mistImage,
  squalls: fogImage,
  tornado: fogImage,
  fog: fogImage,
  sand: dustSandImage,
  dust: dustSandImage,
  smoke: fogImage,
  haze: fogImage,
  snow: nightOvercastCloudsImage,
  thunderstorm: nightThunderImage,
};

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
