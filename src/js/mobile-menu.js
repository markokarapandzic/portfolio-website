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
