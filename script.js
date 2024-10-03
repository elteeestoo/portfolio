const infoContainer = document.querySelector('.info-container')
const infoTitle = document.querySelector('.info-title')
window.addEventListener('scroll', (event) => {
  console.log(window.scrollY/100)
  infoContainer.style.opacity = 1 - window.scrollY/350
  infoTitle.style.opacity = 0 + window.scrollY/350
  if (window.scrollY<400) {
    infoTitle.style.fontSize = `${1 + window.scrollY/350}rem`

  }
})