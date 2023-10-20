function makeCoordinatesURL(city) {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=1f88f358bd549e4bfc5d35ed04656723`;
}

async function fetchCoordinates(url) {
  try {
    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) {
      throw new Error('Network response was not ok');
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
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

export default async function getWeatherData(city, units) {
  const coordinates = await fetchCoordinates(makeCoordinatesURL(city));
  const fetchedWeatherData = await fetchWeatherData(
    makeWeatherURL(coordinates, units),
  );
  fetchedWeatherData.name = coordinates.name;
  fetchedWeatherData.state = coordinates.state;

  return fetchedWeatherData;
}
