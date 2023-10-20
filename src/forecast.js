import './styles/style.css';
import handleForecastSearch from './modules/search-forecast';
import { transitionForecast } from './modules/dom';

transitionForecast();
handleForecastSearch();
