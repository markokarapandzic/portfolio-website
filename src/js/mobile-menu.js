const menuBtn = document.querySelector('.menu-btn');
export const navLinks = document.querySelector('.nav-links');
const resumeBtn = document.querySelector('.resume-btn');
const navBtns = document.querySelectorAll('.nav-link');

// Handle Mobile Menu Display
export const menuBtnListener = () => menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
});

export const resumeBtnListener = () => resumeBtn.addEventListener('click', () => {
  removeShowLinks()
});

export const navBtnsListener = () => navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    removeShowLinks()
  });
});

export const removeShowLinks = () => {
  navLinks.classList.remove('show-links');
};
