function makeCoordinatesURL(city) {
  return `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=1f88f358bd549e4bfc5d35ed04656723`;
}

export async function fetchCoordinates(url) {
  try {
    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) {
      throw new Error('Coordinates API response was not ok');
    }
    const data = await response.json();
    return {
      lat: data[0].lat,
      lon: data[0].lon,
      name: data[0].name,
      state: data[0].state,
    };
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

function makeWeatherURL(coordinates, units) {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=20f7632ffc2c022654e4093c6947b4f4`;
}

async function fetchWeatherData(url) {
  try {
    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) {
      throw new Error('Weather Data API response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

async function fetchCountryData(coordinates) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates.lat}&lon=${coordinates.lon}`;
  try {
    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) {
      throw new Error('Country Data API response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

function getLocalTime(weatherData) {
  const { timezone } = weatherData;
  const currentUtcTime = new Date();
  const localTime = new Date(
    currentUtcTime.toLocaleString('en-US', {
      timeZone: timezone,
      hour12: false,
    }),
  );

  const hours = localTime.getHours().toString().padStart(2, '0');
  const minutes = localTime.getMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
}

function getWeatherDescriptions(fetchedWeatherData) {
  const weatherDescriptions = [];
  for (let i = 0; i < 6; i += 1) {
    weatherDescriptions.push(
      fetchedWeatherData.daily[i].weather[0].description,
    );
  }
  return weatherDescriptions;
}

export default async function getWeatherData(city, units) {
  const coordinates = await fetchCoordinates(makeCoordinatesURL(city));
  const countryData = await fetchCountryData(coordinates);
  const fetchedWeatherData = await fetchWeatherData(
    makeWeatherURL(coordinates, units),
  );
  fetchedWeatherData.name = coordinates.name;
  fetchedWeatherData.state = coordinates.state;
  fetchedWeatherData.localTime = getLocalTime(fetchedWeatherData);
  fetchedWeatherData.country = countryData.address.country;
  fetchedWeatherData.weatherDescriptions =
    getWeatherDescriptions(fetchedWeatherData);

  return fetchedWeatherData;
}
