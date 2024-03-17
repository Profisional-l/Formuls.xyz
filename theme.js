document.addEventListener('DOMContentLoaded', function () {
  var userAgent = navigator.userAgent.toLowerCase()
  var isAndroid = userAgent.indexOf('formulsandroiduseragent') !== -1

  if (isAndroid) {
    var godownloadElement = document.querySelector('.godownload')
    var buttoappfooter = document.querySelector('.buttoappfooter')
    var tocalcbut = document.querySelector('.tocalcbut')
    if (godownloadElement) {
      tocalcbut.style.right = '81px'
      godownloadElement.style.display = 'none'
      if (buttoappfooter) {
        buttoappfooter.style.display = 'none'
      }
    }
  }

  let LogoName = document.querySelector('.logo')
  let LogoIMG = document.querySelector('.logoIMG')
  let scrolled = false
  let scrollToTopBtn = document.getElementById('scrollToTopBtn')

  window.onscroll = function () {
    scrollFunction()
    scrollLOGO()
  }

  function scrollLOGO() {
    if (
      document.body.scrollTop >= 70 ||
      document.documentElement.scrollTop >= 70
    ) {
      if (!scrolled) {
        LogoName.classList.remove('changeLOGOin')
        LogoIMG.classList.remove('changeLOGOout')
        LogoName.classList.add('changeLOGOout')
        LogoIMG.classList.add('changeLOGOin')
        scrolled = true
      }
    } else {
      if (scrolled) {
        LogoName.classList.remove('changeLOGOout')
        LogoIMG.classList.remove('changeLOGOin')
        LogoName.classList.add('changeLOGOin')
        LogoIMG.classList.add('changeLOGOout')
        scrolled = false
      }
    }
  }

  if (scrollToTopBtn) {
    function scrollFunction() {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      ) {
        scrollToTopBtn.style.display = 'block'
      } else {
        scrollToTopBtn.style.display = 'none'
      }
    }
    scrollToTopBtn.addEventListener('click', function () {
      scrollToTop()
    })
  }

  function scrollToTop() {
    var currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop

    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop)
      window.scrollTo(0, currentScroll - currentScroll / 16)
    }
  }
})

let maska = document.querySelector('.mask')
console.log(maska, 'ede')
window.addEventListener('load', () => {
  maska.classList.add('hide')
  setTimeout(() => {
    maska.remove()
  }, 200)
})
// maska.style.display = 'none'
$(document).ready(function () {
  // Используем событие pageshow
  $(window).on('pageshow', function (event) {
    if (event.originalEvent.persisted) {
      // Скрываем overlay при возврате на страницу из истории
      $('.page-transition-overlay').css('display', 'none')
    }
  })

  $(document).on(
    'click',
    'a:not([href^="https://t.me/jakesooly"]):not([href^="https://0101.best/"]):not([href^="https://play.google.com/store/apps/details?id=com.finetest.formuls"]), .gobackbut, .buttogame',
    function (e) {
      e.preventDefault()
      var href = $(this).attr('href')

      // Показываем overlay
      $('.page-transition-overlay').fadeIn(260, function () {
        // После показа overlay, переходим на новую страницу
        window.location.href = href
      })
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

window.onload = function themescript() {
  const savedTheme = localStorage.getItem('theme')
  const isSwitchOn = localStorage.getItem('theme1')
  console.log('is', isSwitchOn)
  console.log(savedTheme)
  if (savedTheme == 'light') {
    document.body.setAttribute('light', '')
    document.body.setAttribute('theme', 'light')
    let switchElement = document.getElementById('checkboxswitcher')
    switchElement.checked = true
  } else {
    document.body.removeAttribute('light')
    document.body.setAttribute('theme', 'dark')
    // switchElement.checked = false
  }
}
const handleChange = (isChecked) => {
  if (isChecked) {
    localStorage.setItem('theme', 'light')
    localStorage.setItem('theme1', true)
    document.body.setAttribute('light', '')
    document.body.setAttribute('theme', 'light')
    //var switchElement = document.getElementById('checkboxswitcher');
    localStorage.setItem('isON', 'true')
  } else {
    localStorage.removeItem('theme')
    document.body.removeAttribute('light')
    document.body.setAttribute('theme', 'dark')
    localStorage.setItem('theme1', false)
    //var switchElement = document.getElementById('checkboxswitcher');
  }
}

// var PoMswitch = document.querySelector('.PoM');
// const beforeElement = window.getComputedStyle(PoMswitch, '::before');
// PoMswitch.style.setProperty('--before-color', 'red');
// console.log(PoMswitch)
if (document.location.pathname.includes('mathindex.html')) {
  document.documentElement.style.setProperty(
    '--var-MoP-img',
    'url("../images/mathlogo.png")',
  )
  var PoMswith = document.querySelector('.PoM')
  PoMswith.classList.add('ifmathpage')
  console.log(PoMswith.classList)
}

// if (document.location.pathname.includes('index.html')) {
//   document.documentElement.style.setProperty(
//     '--var-MoP-img',
//     'url("../images/physlogo.png")',
//   )
//   console.log('rfjqg9j')
// }

