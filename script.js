const infoContainer = document.querySelector('.info-container');
const infoTitle = document.querySelector('.info-title');
const contactInfo = document.querySelector('.contact-info');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const scrollFactor = scrollY / 350;

  // Ajustar opacidad de infoContainer e infoTitle
  let newOpacity = 1 - scrollFactor;
  newOpacity = Math.max(0, Math.min(1, newOpacity)); // Asegurar valores entre 0 y 1

  infoContainer.style.opacity = newOpacity;
  infoTitle.style.opacity = scrollFactor;

  if (scrollY < 400) {
    infoTitle.style.fontSize = `${1 + scrollFactor}rem`;
  }

  // Si el usuario baja más de 400px y el contenedor ya es transparente, activar el globo flotante
  if (scrollY > 300 && newOpacity === 0) {
    contactInfo.classList.add('floating');
    contactInfo.classList.remove('hidden');
  } 

  // Si el usuario sube por encima de 400px, volver al estado inicial
  if (scrollY < 400) {
    contactInfo.classList.add('hidden');
    setTimeout(() => {
      contactInfo.classList.remove('floating');
      contactInfo.classList.remove('hidden'); // Asegura que reaparezca correctamente
    }, 400); 
  }
});