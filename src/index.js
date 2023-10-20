import './styles/style.css';
import getWeatherData from './modules/weather-api';

console.log(await getWeatherData('vranje', 'metric'));
