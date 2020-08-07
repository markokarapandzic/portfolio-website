// Event Cycle
const MAX_MOBILE_SCREEN_WIDTH = 800;
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') !== null) {
    applyColorTheme();
  }

  if (screen.width <= MAX_MOBILE_SCREEN_WIDTH) {
    resizeIcons();
  }

  displayThemeIcon(document.childNodes[1]);
  changeMenuIconColor(FIXED_NAVBAR_INACTIVE);
});

const applyColorTheme = () => {
  const theme = localStorage.getItem('theme');

  if (theme === 'light') {
    document.childNodes[1].classList.add(LIGHT_THEME_CLASS);
  }
};

const resizeIcons = () => {
  const icons = document.querySelectorAll('.project-icon, .sidebar-btn');

  icons.forEach(icon => {
    icon.classList.remove('fa-2x');
    icon.classList.add('fa-4x');
  });
};
