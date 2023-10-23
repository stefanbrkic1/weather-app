import format from 'date-fns/format';

const location = document.getElementById('location');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const description = document.getElementById('weatherDescription');
const clock = document.getElementById('clock');
const thermalSensation = document.getElementById('thermalSensation');
const rainProbability = document.getElementById('rainProbability');
const windSpeed = document.getElementById('windSpeed');
const airHumidity = document.getElementById('airHumidity');
const uvIndex = document.getElementById('uvIndex');
const futureForecastContainers = document.querySelectorAll('.day-forecast');

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

function getCurrentDate(timeZone) {
  const currentDate = new Date();
  return format(currentDate, 'eeee, MMMM dd, yyyy', { timeZone });
}

function createDescriptionString(weatherData) {
  return `${Math.round(weatherData.daily[0].temp.min)}°c / ${Math.round(
    weatherData.daily[0].temp.max,
  )}°c, ${weatherData.current.weather[0].main}`;
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

function setFutureWeatherData(weatherData) {
  const days = getFutureDays(weatherData.timezone);

  futureForecastContainers.forEach((container, index) => {
    const futureDay = container.querySelector('.day');
    const futureImage = container.querySelector('.weather-image');
    const futureWeather = container.querySelector('.weather-description');
    const futureMinTemp = container.querySelector('.day-min');
    const futureMaxTemp = container.querySelector('.day-max');

    const iconURL = `http://openweathermap.org/img/w/${
      weatherData.daily[index + 1].weather[0].icon
    }.png`;

    futureDay.textContent = days[index];
    futureImage.style.background = `url(${iconURL})`;
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