const snbBtn = document.querySelector('#snb .btn-menu');

const subMenu = document.querySelector('#snb .sub-menu');

snbBtn.addEventListener('click', () => {
  if (subMenu.classList.contains('hide')) {
    subMenu.classList.remove('hide');
  } else {
    subMenu.classList.add('hide');
  }
});
