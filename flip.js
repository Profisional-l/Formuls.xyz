let cards = document.querySelectorAll('.flashcard');
let flippedCard = null;

function flipCard(card) {
  card.classList.toggle('flipped');
  if (card.classList.contains('flipped')) {
    card.style.backgroundColor = 'white'; 
    if (flippedCard && flippedCard !== card) {
      flippedCard.style.backgroundColor = '#ffffff12';
    }
    flippedCard = card;
  } else {
    card.style.backgroundColor = '#ffffff12'; 
    flippedCard = null;
  }
  cards.forEach(function (element) {
    if (element !== card && element.classList.contains('flipped')) {
      element.classList.remove('flipped');
      element.style.backgroundColor = '#ffffff12';
    }
  });
}

if (document.location.pathname.includes('gamepage.html')) {
let but = document.querySelector('.but');
// let cardsfield = document.querySelector('.cardsfield');
      
    but.addEventListener('click', function() {
        
        but.textContent = "Cледуюшая карточка";
        var randomNumber = Math.floor(Math.random() * cards.length);
        for (var i = 0; i < cards.length; i++) {
        if (i === randomNumber) {
            cards[i].style.display = 'block';
            cards[i].style.textalign ='center';
            cards[i].style.cursor='pointer';
            cards[i].style.margin='10px';
            cards[i].style.height='100px';
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