let maska = document.querySelector('.mask')
console.log(maska)
window.addEventListener('load', () => {
  maska.classList.add('hide')
  setTimeout(() => {
    maska.remove()
  }, 600)
})

$(document).ready(function () {
  var body = $('body')
  body.css('background-color', 'var(--var-body-bg)') // Устанавливаем начальный цвет фона
  body.fadeIn(600) // Плавное появление

  $(document).on(
    'click',
    "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])",
    function (e) {
      e.preventDefault()
      
      // Задержка перед началом анимации
      setTimeout(function () {
        body.fadeOut(600) // Плавное исчезновение
      }, 100) // Примерно 100 миллисекунд задержки, можно изменить значение по вашему усмотрению

      var self = this
      setTimeout(function () {
        body.css('background-color', 'var(--var-body-bg)') // Используйте переменную для цвета фона
        body.fadeIn(600) // Плавное появление
        window.location.href = $(self).attr('href') // Переход по ссылке
      }, 700) // Задержка перед изменением цвета и появлением, общая задержка 600 + 100
    },
  )
})


document
  .querySelector("meta[name='apple-mobile-web-app-status-bar-style']")
  .setAttribute('content', '#252525')
function toggleFullScreen() {
  var elem = document.documentElement

  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen()
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen()
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen()
  }
}

window.onload = function () {
  const savedTheme = localStorage.getItem('theme')
  const isSwitchOn = localStorage.getItem('theme1')
  console.log('is', isSwitchOn)
  console.log(savedTheme)
  if (savedTheme == 'light') {
    document.body.setAttribute('light', '')
    let switchElement = document.getElementById('checkboxswitcher')
    switchElement.checked = true
  } else {
    document.body.removeAttribute('light')
    switchElement.checked = false
  }
}
const handleChange = (isChecked) => {
  if (isChecked) {
    localStorage.setItem('theme', 'light')
    localStorage.setItem('theme1', true)
    document.body.setAttribute('light', '')
    //var switchElement = document.getElementById('checkboxswitcher');
    localStorage.setItem('isON', 'true')
  } else {
    localStorage.removeItem('theme')
    document.body.removeAttribute('light')
    localStorage.setItem('theme1', false)
    //var switchElement = document.getElementById('checkboxswitcher');
  }
}
