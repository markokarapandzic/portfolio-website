// Dark Theme
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
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

const displayThemeIcon = (rootTag) => {
  if (rootTag.classList.contains(LIGHT_THEME_CLASS)) {
    themeBtn.classList.remove('fa-sun');
    themeBtn.classList.add('fa-moon');
  } else {
    themeBtn.classList.remove('fa-moon');
    themeBtn.classList.add('fa-sun');
  }
};

const saveThemePreference = (rootTag) => {
  if (rootTag.classList.contains(LIGHT_THEME_CLASS)) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
};