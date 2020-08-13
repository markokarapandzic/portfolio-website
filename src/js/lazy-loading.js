const images = document.querySelectorAll('[data-src]');

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 200px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      imgObserver.unobserve(entry.target);
    } else {
      return;
    }
  });
}, imgOptions);

function loadImage(image) {
  const src = image.getAttribute('data-src');
  if (!src) {
    return;
  }

  image.src = src;
};

images.forEach(image => {
  imgObserver.observe(image);
});