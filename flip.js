let cards = document.querySelectorAll('.flashcard')
let flippedCard = null

function flipCard(card) {
  card.classList.toggle('flipped')
  if (card.classList.contains('flipped')) {
    card.style.backgroundColor = 'white'
    if (flippedCard && flippedCard !== card) {
      flippedCard.style.backgroundColor = '#343434'
    }
    flippedCard = card
  } else {
    card.style.backgroundColor = '#343434'
    flippedCard = null
  }
  cards.forEach(function (element) {
    if (element !== card && element.classList.contains('flipped')) {
      element.classList.remove('flipped')
      element.style.backgroundColor = '#343434'
    }
  })
}

//--------------------------------------------------------------scrolltoup-------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn')

  window.onscroll = function () {
    scrollFunction()
  }

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

  function scrollToTop() {
    // Получаем текущую прокрутку
    var currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop

    if (currentScroll > 0) {
      // Если мы еще не находимся вверху, прокручиваем страницу вверх с использованием requestAnimationFrame
      window.requestAnimationFrame(scrollToTop)
      window.scrollTo(0, currentScroll - currentScroll / 16)
    }
  }
})

//---------------------------------------------------------------game scripr--------------------------------------------------

if (
  document.location.pathname.includes('gamepage.html') ||
  document.location.pathname.includes('gasewatergame.html') ||
  document.location.pathname.includes('kinematicagame.html') ||
  document.location.pathname.includes('secretowenph.html') ||
  document.location.pathname.includes('dinamicagame.html') ||
  document.location.pathname.includes('zaksochrngame.html') ||
  document.location.pathname.includes('termodinamicagame.html') ||
  document.location.pathname.includes('electrostatgame.html') ||
  document.location.pathname.includes('elektrtokgame.html') ||
  document.location.pathname.includes('magnitgame.html') ||
  document.location.pathname.includes('opticagame.html') ||
  document.location.pathname.includes('atomgame.html') ||
  document.location.pathname.includes('mktgame.html')
) {
  let but = document.querySelector('.but')
  // let maska = document.querySelector('.mask');
  // maska.style.display = 'flex';
  let categoryname = document.querySelector('.namecategoriesonit')
  let gobackbut = document.getElementById('gobacksvg')
  gobackbut.style.display = 'none'
  // let cardsfield = document.querySelector('.cardsfield');
  let texttogame = document.querySelector('.texttogame')
  let numofclick = -1
  let numField = document.querySelector('.numofclick')
  let adcard = document.querySelector('.adcards')
  console.log(adcard)

  numField.style.display = 'none'
  but.addEventListener('click', function gotov() {
    numField.style.display = 'block'
    numofclick++
    console.log(numofclick)
    numField.innerHTML = numofclick
    texttogame.style.display = 'none'
    but.textContent = 'Cледуюшая карточка'
    categoryname.style.display = 'none'
    but.classList.remove('margin-bottom')
    gobackbut.style.display = 'block'

    // but.classList.add("position")
    // but.style.position = "fixed";
    // but.classList.add("top")
    // but.style.top = "100%";

    var randomNumber = Math.floor(Math.random() * cards.length)
    for (var i = 0; i < cards.length; i++) {
      if (i === randomNumber) {
        const cardi = cards[i]
        cards[i].style.display = 'block'
        cards[i].style.textalign = 'center'
        cards[i].style.cursor = 'pointer'
        cards[i].style.margin = '10px'
        cards[i].style.height = '180px'
        cards[i].style.display = 'flex'
        cards[i].style.flexdirection = 'column'
        cards[i].style.alignitems = 'center'
        cards[i].style.justifycontent = 'center'

        if ((numofclick % 999 == 0) & (numofclick != 0)) {
          cards[i].style.display = 'none'
          but.disabled = true
          adcard.style.display = 'block'
          but.style.backgroundColor = 'gray'
          but.textContent = '3 секунды рекламы'
          setTimeout(() => {
            // cards[i] = cardi
            // cardi.style.display = 'block'
            // cardi.style.display = 'block'
            // cardi.style.textalign = 'center'
            // cardi.style.cursor = 'pointer'
            // cardi.style.margin = '10px'
            // cardi.style.height = '180px'
            // cardi.style.display = 'flex'
            // cardi.style.flexdirection = 'column'
            // cardi.style.alignitems = 'center'
            // cardi.style.justifycontent = 'center'
            // adcard.style.display = 'none'
            but.textContent = 'Cледуюшая карточка'
            but.style.backgroundColor = '#252525'
            but.disabled = false

            function handleClick() {
              adcard.style.display = 'none'
              // Удалить обработчик события после первого выполнения
              but.removeEventListener('click', handleClick)
            }

            but.addEventListener('click', handleClick)
          }, 3000)

          // cardsfield.innerHTML = adcard.innerHTML;
        }

        if (window.innerWidth < 610) {
          cards[i].style.minWidth = '140px'
        }
        if (window.innerWidth > 610) {
          cards[i].style.minWidth = '440px'
        }
      } else {
        cards[i].style.display = 'none'
      }
    }
  })
}

//-----------------------------------------------------------------------------------------------------------------------------
