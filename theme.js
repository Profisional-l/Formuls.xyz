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

  if (
    isAndroid ||
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  ) {
    var godownloadElement = document.querySelector('.godownload')
    var buttoappfooter = document.querySelector('.buttoappfooter')
    var tocalcbut = document.querySelector('.tocalcbut')
    let LogoName = document.querySelector('.logo')
    let LogoIMG = document.querySelector('.logoIMG')
    var linktoHOWwork = document.getElementById('linkTOhow')
    let mainscreenh2 = document.querySelector('.mainscreenh2')
    let mainscreenhiH3 = document.querySelector('.mainscreenhi h3')
    let categoriesfield = document.getElementById('categoriesfield')
    let footer = document.querySelector('footer')
    let maintextHI = document.querySelectorAll('.textonmain')
    let selectIT = document.getElementById('selectIT')

    if (
      mainscreenh2 &&
      !document.location.pathname.includes('allformuls.html')
    ) {
      mainscreenh2.style.display = 'none'
      mainscreenhiH3.style.display = 'none'
      footer.style.display = 'none'
      maintextHI.forEach(function (e) {
        e.style.display = 'none'
      })
    }
    if (categoriesfield) {
      categoriesfield.style.display = 'none'
      selectIT.style.display = 'none'
    }

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
  // Показываем overlay с задержкой
  function showOverlayWithDelay() {
    setTimeout(function () {
      $('.page-transition-overlay').fadeIn(260);
    }, 10);
  }

  // Скрываем overlay
  function hideOverlay() {
    $('.page-transition-overlay').fadeOut(260);
  }

  // Обработчик клика на ссылки
  $(document).on('click', 'a:not([href^="#"]):not([target="_blank"])', function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    showOverlayWithDelay();
    setTimeout(function () {
      window.location.href = href;
    }, 260); // Задержка для завершения анимации
  });

  // Обработчик события popstate
  window.addEventListener('popstate', function (event) {
    showOverlayWithDelay(); // Показываем overlay при нажатии кнопки назад
    setTimeout(function () {
      hideOverlay();
    }, 260); // Задержка для завершения анимации
  });
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
