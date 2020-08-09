// Display Fixed menu when Scrolling
const FIXED_NAVBAR_ACTIVE = 1;
const FIXED_NAVBAR_INACTIVE = 0;

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const headerHight = header.getBoundingClientRect().height;

  if (scrollHeight > headerHight) {
    header.classList.add('fixed-nav');
    logo.src = LOGO_ICON_BLACK;
    changeMenuIconColor(FIXED_NAVBAR_ACTIVE);
  } else {
    header.classList.remove('fixed-nav');
    logo.src = LOGO_ICON_WHITE;
    changeMenuIconColor(FIXED_NAVBAR_INACTIVE);
  }
});

const changeMenuIconColor = (navbarStatus) => {
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