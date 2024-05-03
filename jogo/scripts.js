const selectElement1 = document.getElementById("mySelect1");

document.getElementsByClassName("contador").innerHTML = 0
cont = 0

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
    cont = 0
    document.getElementById('contador').innerHTML = 0
    document.getElementById('output').innerHTML = data.join('')
    var m = document.querySelectorAll('.memory-card1');
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    // console.log(m)
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


function contmov() {
  console.log(document.getElementsByClassName("contador").innerHTML)
 
  cont = cont + 1 
  console.log(cont)
  document.getElementById('contador').innerHTML = cont
}


function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  
  contmov()

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  // console.log(firstCard)
  // if (firstCard.classList.contains("frente")) {
  //   console.log(firstCard.childNodes[0])
  //   firstCard.childNodes[0].setAttribute('src', './img/Robert_Oppenheimer.jpg');
  //   // do something here if the class exists
  // }

  // if (secondCard.classList.contains("frente")) {
  //   console.log(firstCard.childNodes[0])
  //   firstCard.childNodes[0].setAttribute('src', './img/Robert_Oppenheimer.jpg');

  //   // do something here if the class exists
  // }

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