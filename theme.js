window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    window.location.reload()
  }
})

const handleChange = (isChecked) => {
  localStorage.setItem('theme', isChecked)

  if (isChecked) {
    document.body.setAttribute('light', '')
    if (document.location.pathname.includes('formulsCALC.html')) {
      document.body.setAttribute('theme', 'light')
    }
  } else {
    document.body.removeAttribute('light')
    if (document.location.pathname.includes('formulsCALC.html')) {
      document.body.setAttribute('theme', 'dark')
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const isLightTheme = localStorage.getItem('theme') === 'true'
  const switchElement = document.getElementById('checkboxswitcher')
  console.log(isLightTheme)
  switchElement.checked = isLightTheme

  if (isLightTheme) {
    document.body.setAttribute('light', '')
  } else {
    document.body.removeAttribute('light')
  }

  setTimeout(function () {
    if (isLightTheme) {
      switchElement.checked = true
    } else {
      switchElement.checked = false
    }
  }, 100)

  var userAgent = navigator.userAgent.toLowerCase()
  var isAndroid = userAgent.indexOf('formulsandroiduseragent') !== -1

  // var isAndroid = true

  if (isAndroid || window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    var godownloadElement = document.querySelector('.godownload')
    var buttoappfooter = document.querySelector('.buttoappfooter')
    var tocalcbut = document.querySelector('.tocalcbut')
    let LogoName = document.querySelector('.logo')
    let LogoIMG = document.querySelector('.logoIMG')
    var linktoHOWwork = document.getElementById('linkTOhow')
    if (linktoHOWwork) {
      linktoHOWwork.style.display = 'none'
    }
    function changeLogoType() {
      LogoName.classList.add('changeLOGOout')
      LogoIMG.classList.add('changeLOGOin')
    }
    changeLogoType()
    if (tocalcbut) {
      tocalcbut.style.right = '81px'
    }
    if (godownloadElement) {
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

  if (document.location.pathname.includes('game')) {
    LogoName.classList.add('changeLOGOout')
    LogoIMG.classList.add('changeLOGOin')
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
      window.scrollTo(0, currentScroll - currentScroll / 5)
    }
  }
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
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
    'a:not([href^="#maintext"]):not([href^="https://t.me/anttany"]):not([href^="https://t.me/jakesooly"]):not([href^="https://0101.best/"]):not([href^="https://play.google.com/store/apps/details?id=com.finetest.formuls"]), .gobackbut, .buttogame',
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
