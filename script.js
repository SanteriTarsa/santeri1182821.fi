// Yhdistämme kaikki scroll-tapahtumat yhteen, jotta koodi on tehokkaampi.
window.addEventListener('scroll', function () {
  // Määritellään laatikot
  const sections = [
    { el: document.querySelector('.intro'), animation: 'translateX(0)', opacity: 1 }, // Tervetuloa
    { el: document.querySelector('.yhteystiedot'), animation: 'translateX(0)', opacity: 1 }, // Yhteystiedot
    { el: document.querySelector('.hinnasto'), animation: 'translateX(0)', opacity: 1 }, // Hinnasto
    { el: document.querySelector('.maksut'), animation: 'translateX(0)', opacity: 1 } // Maksuvälineet
  ];

  // Käydään kaikki laatikot läpi ja tarkistetaan, onko ne näkyvissä
  sections.forEach(section => {
    const sectionTop = section.el.getBoundingClientRect().top; // Selvitetään laatikon sijainti
    const sectionVisible = window.innerHeight - sectionTop; // Lasketaan kuinka paljon laatikko on näkyvissä

    if (sectionVisible > 150) {  // 150px ennen kuin laatikko tulee näkyviin
      section.el.style.transform = section.animation;  // Liukuu paikoilleen
      section.el.style.opacity = section.opacity;  // Teksti tulee näkyviin
    }
  });
});
