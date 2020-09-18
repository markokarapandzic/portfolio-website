import setup from './startUp.js';
import fixedNav from './fixed-nav.js';
import lazyLoading from './lazy-loading.js';
import { themeBtnListener } from './dark-theme.js'
import { menuBtnListener, resumeBtnListener, navBtnsListener } from './mobile-menu.js';
import { scrollingLinks, logoBtnListener } from './scrolling.js';

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

setup();
fixedNav();
lazyLoading();

// Theme Config
themeBtnListener();

// Mobile Menu Config
menuBtnListener();
resumeBtnListener();
navBtnsListener();

// Scrolling Config
scrollingLinks();
logoBtnListener();