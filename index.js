// Fonction pour générer une addition aléatoire avec des nombres de 1 à 10
function genererAddition() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var resultatAttendu = num1 + num2;
  return { num1: num1, num2: num2, resultatAttendu: resultatAttendu };
}

// Fonction pour vérifier la réponse
function verifierReponse(addition, reponse) {
  return addition.resultatAttendu === parseInt(reponse);
}

// Fonction principale pour exécuter le programme
function entrainementAdditions() {
  var addition = genererAddition();
  var reponse = prompt("Combien font " + addition.num1 + " + " + addition.num2 + " ?");
  
  if (verifierReponse(addition, reponse)) {
      alert("Bravo ! La réponse est correcte.");
  } else {
      alert("Dommage. La réponse correcte est " + addition.resultatAttendu);
  }
  
  var continuer = confirm("Voulez-vous continuer l'entraînement ?");
  if (continuer) {
      entrainementAdditions();
  }
}

// Appel de la fonction principale pour commencer l'entraînement
entrainementAdditions();
