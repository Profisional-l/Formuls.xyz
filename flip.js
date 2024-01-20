let cards = document.querySelectorAll('.flashcard');
let flippedCard = null;

function flipCard(card) {
  card.classList.toggle('flipped');
  if (card.classList.contains('flipped')) {
    card.style.backgroundColor = 'white'; 
    if (flippedCard && flippedCard !== card) {
      flippedCard.style.backgroundColor = '#343434';
    }
    flippedCard = card;
  } else {
    card.style.backgroundColor = '#343434'; 
    flippedCard = null;
  }
  cards.forEach(function (element) {
    if (element !== card && element.classList.contains('flipped')) {
      element.classList.remove('flipped');
      element.style.backgroundColor = '#343434';
    }
  });
}


//--------------------------------------------------------------allcard-------------------------------------------------

//---------------------------------------------------------------game scripr--------------------------------------------------


if (document.location.pathname.includes('gamepage.html') || document.location.pathname.includes('gasewatergame.html') || document.location.pathname.includes('kinematicagame.html') || document.location.pathname.includes('secretowenph.html') || document.location.pathname.includes('dinamicagame.html') || document.location.pathname.includes('zaksochrngame.html') || document.location.pathname.includes('mktgame.html') || document.location.pathname.includes('termodinamicagame.html') || document.location.pathname.includes('electrostatgame.html') || document.location.pathname.includes('elektrtokgame.html') || document.location.pathname.includes('magnitgame.html')  || document.location.pathname.includes('opticagame.html') || document.location.pathname.includes('atomgame.html')) {
let but = document.querySelector('.but');
let categoryname = document.querySelector('.namecategoriesonit');
let gobackbut = document.getElementById('gobacksvg');
gobackbut.style.display = "none";
// let cardsfield = document.querySelector('.cardsfield');
let texttogame = document.querySelector(".texttogame");
      
    but.addEventListener('click', function() {
        texttogame.style.display = "none";
        but.textContent = "Cледуюшая карточка";
        categoryname.style.display = "none";
        but.classList.remove('margin-bottom');
        gobackbut.style.display = "block";

        // but.classList.add("position")
        // but.style.position = "fixed";
        // but.classList.add("top")
        // but.style.top = "100%";

        var randomNumber = Math.floor(Math.random() * cards.length);
        for (var i = 0; i < cards.length; i++) {
        if (i === randomNumber) {
            cards[i].style.display = 'block';
            cards[i].style.textalign ='center';
            cards[i].style.cursor='pointer';
            cards[i].style.margin='10px';
            cards[i].style.height='180px';
            cards[i].style.display='flex';
            cards[i].style.flexdirection='column';
            cards[i].style.alignitems='center';
            cards[i].style.justifycontent='center';
        
        } else {
            cards[i].style.display = 'none';
        }
  }
});
}


//-----------------------------------------------------------------------------------------------------------------------------