let maska = document.querySelector('.mask')
console.log(maska)
window.addEventListener('load', () => {
  maska.classList.add('hide')
  setTimeout(() => {
    maska.remove()
  }, 600)
})

$(document).ready(function () {
  $(document).on('click', 'a, .gobackbut', function (e) {
    e.preventDefault();
    var href = $(this).attr('href');

    // Показываем overlay
    $('.page-transition-overlay').fadeIn(200, function () {
      // После показа overlay, переходим на новую страницу
      window.location.href = href;
    });
  });
});

// При загрузке новой страницы, скрываем overlay
$(window).on('load', function () {
  $('.page-transition-overlay').fadeOut(200);
});


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
