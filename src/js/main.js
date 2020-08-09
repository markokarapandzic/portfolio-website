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

// Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(swReg => {
        console.log('Service Worker Registered');
      }).catch(error => {
        console.error('Service Worker NOT Registered, error: ' + error);
      });
  });
}