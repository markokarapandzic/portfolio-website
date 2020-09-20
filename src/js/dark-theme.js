import { LIGHT_THEME_CLASS, FIXED_NAVBAR_ACTIVE, FIXED_NAVBAR_INACTIVE } from './constants.js';
import { changeMenuIconColor } from './fixed-nav.js';

const themeBtn = document.getElementById('theme-toggle');
const header = document.querySelector('.header');

// Dark Theme
export const themeBtnListener = () => themeBtn.addEventListener('click', () => {
  const rootTag = document.childNodes[1];
  rootTag.classList.toggle(LIGHT_THEME_CLASS);

  if (header.classList.contains('fixed-nav')) {
    changeMenuIconColor(FIXED_NAVBAR_ACTIVE);
  } else {
    changeMenuIconColor(FIXED_NAVBAR_INACTIVE);
  }

  displayThemeIcon(rootTag);
  saveThemePreference(rootTag);
});

export const displayThemeIcon = (rootTag) => {
  if (rootTag.classList.contains(LIGHT_THEME_CLASS)) {
    themeBtn.classList.remove('fa-sun');
    themeBtn.classList.add('fa-moon');
  } else {
    themeBtn.classList.remove('fa-moon');
    themeBtn.classList.add('fa-sun');
  }
};

export const saveThemePreference = (rootTag) => {
  if (rootTag.classList.contains(LIGHT_THEME_CLASS)) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
};