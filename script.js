window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.intro, .hinnasto, .yhteystiedot, .maksut');

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = window.innerHeight - sectionTop;

    if (sectionVisible > 50) {
      section.classList.add('in-view');
    } else {
      section.classList.remove('in-view');
    }
  });
});
