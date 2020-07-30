const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const resumeBtn = document.querySelector('.resume-btn');
const navBtns = document.querySelectorAll('.nav-link');
const header = document.querySelector('header');
const menuIcon = document.querySelector('.header-icon');
const logo = document.querySelector('.logo');

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
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const headerHight = header.getBoundingClientRect().height;

  if (scrollHeight > headerHight) {
    header.classList.add('fixed-nav');
    menuIcon.src = './images/menu-icon-black.png';
    logo.src = './images/defalt-logo-black.png';
  } else {
    header.classList.remove('fixed-nav');
    menuIcon.src = './images/menu-icon.svg';
    logo.src = './images/defalt-logo.png';
  }
});

// Smooth Scroll
const scrollLinks = document.querySelectorAll('.nav-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const id = event.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    if (id === 'contact-section') {
      window.scrollTo({
        left: 0,
        top: element.offsetTop,
      });
      return;
    }

    const headerHight = header.getBoundingClientRect().height;
    const navLinksHeight = navLinks.getBoundingClientRect().height;
    const fixedNav = header.classList.contains('fixed-nav');
    let position = element.offsetTop - headerHight;

    if (!fixedNav) {
      position = position - headerHight;
    }
    if (headerHight > 100) {
      position = position + navLinksHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

const logoBtn = document.querySelector('.logo-btn');
logoBtn.addEventListener('click', () => {
  window.scrollTo({
    left: 0,
    top: 0,
  });
});
