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
  var count = 5;
  var countdown = setInterval(function () {
    count--;
    if (count === 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerText = "";
    } else {
      document.getElementById("countdown").innerText =
        "Compte à rebours : " + count + " secondes";
    }
  }, 1000);
}

// Vérifier la somme des chiffres
function checkSum() {
  var num1 = parseInt(document.getElementById("card1").innerText);
  var num2 = parseInt(document.getElementById("card2").innerText);
  var num3 = parseInt(document.getElementById("card3").innerText);
  var sumInput = document.getElementById("sumInput");
  var sum = num1 + num2 + num3;

  if (parseInt(sumInput.value) === sum) {
    document.getElementById("result").innerText = "Bravo ! La somme est correcte.";
    setTimeout(function() {
      document.getElementById("result").innerText = "";
    }, 1000); // Disparaît après 1 seconde
  } else {
    document.getElementById("result").innerText = "Désolé, la somme correcte est " + sum + ".";
    setTimeout(function() {
      document.getElementById("result").innerText = "";
    }, 1000); // Disparaît après 1 seconde
  }
  // Réinitialiser le contenu de l'input
  sumInput.value = "";
  // Mettre à jour les cartes pour un nouveau jeu
  updateCards();
}

// Initialiser les cartes au chargement de la page
window.onload = function () {
  updateCards();
};
