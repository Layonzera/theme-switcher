const bgTheme = document.querySelector('.dark-theme')
const bgSwitcher = document.querySelector('.switch')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')

bgSwitcher.addEventListener('click', function () {
  sun.classList.toggle('hide')
  moon.classList.toggle('hide')
  bgTheme.classList.toggle('dark-theme')
})
