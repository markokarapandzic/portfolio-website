import { FIXED_NAVBAR_ACTIVE, FIXED_NAVBAR_INACTIVE, LOGO_ICON_BLACK, LOGO_ICON_WHITE, LIGHT_THEME_CLASS } from './constants.js'

export const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const menuIcon = document.querySelector('.header-icon');

export default () => window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const headerHight = header.getBoundingClientRect().height;

  if (scrollHeight > headerHight && !header.classList.contains('fixed-nav')) {
    header.classList.add('fixed-nav');
    logo.src = LOGO_ICON_BLACK;
    changeMenuIconColor(FIXED_NAVBAR_ACTIVE);
  } else if (scrollHeight <= headerHight && header.classList.contains('fixed-nav')) {
    header.classList.remove('fixed-nav');
    logo.src = LOGO_ICON_WHITE;
    changeMenuIconColor(FIXED_NAVBAR_INACTIVE);
  }
});

export const changeMenuIconColor = (navbarStatus) => {
  const rootTag = document.childNodes[1];

  if (navbarStatus) {
    if (rootTag.classList.contains(LIGHT_THEME_CLASS)) {
      menuIcon.style.color = 'white';
      logo.src = LOGO_ICON_WHITE;
    } else {
      menuIcon.style.color = 'black';
      logo.src = LOGO_ICON_BLACK;
    }
  } else {
    if (rootTag.classList.contains(LIGHT_THEME_CLASS)) {
      menuIcon.style.color = 'black';
      logo.src = LOGO_ICON_BLACK;
    } else {
      menuIcon.style.color = 'white';
      logo.src = LOGO_ICON_WHITE;
    }
  }
};