const selectElement1 = document.getElementById("mySelect1");

document.getElementById('button').addEventListener('click', d)
document.getElementById('embaralhar').addEventListener('click', d)
document.getElementById('config').addEventListener('click', declarconfig)

function declarconfig() {
  pardecartas = prompt('quantos pares de cartas');
}

function d (){ fetch("./teste.txt")
.then(function (res) {
    return res.text();
})
.then(function (data) { 
    data = data.split("\n");

    // const selectedOption = selectElement1.options[selectElement1.selectedIndex];
    // const selectedValue = selectedOption.value;

    numerodecartasselecionadas = Number(pardecartas)*2
    data = data.slice(0,numerodecartasselecionadas)
  
    document.getElementById('output').innerHTML = data.join('')
    var m = document.querySelectorAll('.memory-card1');
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    console.log(m)
    const z = enbaralhar(m)
    z.forEach(card => card.addEventListener('click', flipCard));
})}

const cards = document.querySelectorAll('.memory-card');


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

function enbaralhar(array){ 
  array.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  })
  return array; 
}; 