// Générer un nombre aléatoire entre min et max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Mettre à jour le contenu des cartes avec des chiffres aléatoires
function updateCards() {
  document.getElementById("card1").innerText = getRandomNumber(1, 11);
  document.getElementById("card2").innerText = getRandomNumber(1, 11);
  document.getElementById("card3").innerText = getRandomNumber(1, 11);
  
  // Déclencher le compte à rebours après la génération des chiffres
  startCountdown();
}

// Compte à rebours de 4 secondes
function startCountdown() {
  var count = 4;
  var countdown = setInterval(function() {
    count--;
    if (count === 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerText = "";
    } else {
      document.getElementById("countdown").innerText = "Compte à rebours : " + count + " secondes";
    }
  }, 1000);
}

// Vérifier la somme des chiffres
function checkSum() {
  var num1 = parseInt(document.getElementById("card1").innerText);
  var num2 = parseInt(document.getElementById("card2").innerText);
  var num3 = parseInt(document.getElementById("card3").innerText);
  var sumInput = parseInt(document.getElementById("sumInput").value);
  var sum = num1 + num2 + num3;
  
  if (sumInput === sum) {
    document.getElementById("result").innerText = "Bravo ! La somme est correcte.";
  } else {
    document.getElementById("result").innerText = "Désolé, la somme correcte est " + sum + ".";
  }
  
  // Mettre à jour les cartes pour un nouveau jeu
  updateCards();
}

// Initialiser les cartes au chargement de la page
window.onload = function() {
  updateCards();
}

