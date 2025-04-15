// Kuunnellaan scroll-tapahtumaa ja tarkistetaan, näkyykö Tervetuloa-laatikko
window.addEventListener('scroll', function () {
  const introSection = document.querySelector('.intro'); // Etsitään Tervetuloa-laatikko
  const sectionTop = introSection.getBoundingClientRect().top; // Selvitetään laatikon sijainti
  const sectionVisible = window.innerHeight - sectionTop; // Lasketaan kuinka paljon laatikko on näkyvissä

  // Jos laatikko tulee näkyviin, liu'utetaan se paikalleen
  if (sectionVisible > 150) {  // 150px ennen kuin laatikko tulee näkyviin
    introSection.style.transform = 'translateX(0)';  // Liukuu paikoilleen
    introSection.style.opacity = '1';  // Teksti tulee näkyviin
  }
});
