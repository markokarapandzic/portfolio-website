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
  removeShowLinks();
  window.scrollTo({
    left: 0,
    top: 0,
  });
});