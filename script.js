const infoContainer = document.querySelector('.info-container');
const infoTitle = document.querySelector('.info-title');
const contactInfo = document.querySelector('.contact-info');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const scrollFactor = scrollY / 350;

  // Ajustar opacidad de infoContainer e infoTitle
  infoContainer.style.opacity = 1 - scrollFactor;
  infoTitle.style.opacity = scrollFactor;

  if (scrollY < 400) {
    infoTitle.style.fontSize = `${1 + scrollFactor}rem`;
  }

  // Activar modo flotante con una transición suave
  if (scrollY >= 400) {
    contactInfo.classList.add('floating');
    contactInfo.classList.remove('hidden'); // Asegura que se muestre suavemente
  } else {
    contactInfo.classList.add('hidden'); // Se oculta suavemente antes de volver a su estado original
    setTimeout(() => {
      contactInfo.classList.remove('floating');
    }, 500); // Retraso para que la transición sea fluida
  }
});