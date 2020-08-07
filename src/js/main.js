const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const resumeBtn = document.querySelector('.resume-btn');
const navBtns = document.querySelectorAll('.nav-link');
const header = document.querySelector('header');
const menuIcon = document.querySelector('.header-icon');
const logo = document.querySelector('.logo');

const LIGHT_THEME_CLASS = 'light-theme';
const LOGO_ICON_WHITE = './images/defalt-logo.png';
const LOGO_ICON_BLACK = './images/defalt-logo-black.png';

// Handle Mobile Menu Display
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
});

resumeBtn.addEventListener('click', () => {
  removeShowLinks()
});

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    removeShowLinks()
  });
});

const removeShowLinks = () => {
  navLinks.classList.remove('show-links');
};

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
