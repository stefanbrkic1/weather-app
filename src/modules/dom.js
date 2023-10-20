const searchBtnIndex = document.getElementById('searchBtnIndex');

export function addSearchButton() {
  searchBtnIndex.classList.remove('opacity-active');
}

export function removeSearchButton() {
  searchBtnIndex.classList.add('opacity-active');
}
