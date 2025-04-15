window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = window.innerHeight - sectionTop;

    if (sectionVisible > 150) {
      section.classList.add('in-view');
    } else {
      section.classList.remove('in-view');
    }
  });
});
