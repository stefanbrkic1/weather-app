import './styles/style.css';
import handleSearchForm from './modules/search-bars';

const searchFormIndex = document.getElementById('searchFormIndex');
const searchBarIndex = document.getElementById('searchBarIndex');

document.addEventListener('DOMContentLoaded', () => {
  handleSearchForm(searchFormIndex, searchBarIndex, 'index');
});
