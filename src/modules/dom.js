export function addSearchButton(searchBtn) {
  searchBtn.classList.remove('opacity-active');
}

export function removeSearchButton(searchBtn) {
  searchBtn.classList.add('opacity-active');
}

export function transitionForecast() {
  const forecast = document.querySelector('.forecast');
  setTimeout(() => {
    forecast.classList.add('opacity-forecast');
  }, 1000);
}
