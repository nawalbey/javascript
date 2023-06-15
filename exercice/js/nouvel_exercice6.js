// 1/ Déclarer 2 variables de type tableau,
// le premier : prenom
// le deuxième : adjectif

// 2/ à partir d'un formulaire, remplir le premier.
// Tant que l'on saisi 12 prénoms, le formulaire s'affiche.
// Idem pour le deuxième avec 12 adjectifs.

// 3/ Déclarer une fonction qui prend 2 paramètres de type tableau,
// qui retourne 1 tableau.

var prenom = [];

var adjectif = [];

var prenomform;

while (prenom.length <= 12) {
  prenomform = prompt("saisir un prenom");
  prenom.push(prenomform);
}

var adjectifform;
for (i = 0; i < prenom.length; i++) {
  prenomform = prompt("saisir un prenom");
  prenom.push(prenomform);
}

// while (adjectif.length <= prenom.length) {
//   prenomform = prompt("saisir un prenom");
//   prenom.push(prenomform);
// }

function prenom1(array1, array2) {
  var tableau = [[array1], [array2]];
  return tableau;
}

var prenom2 = prenom1(prenom, adjectif);
document.write(prenom2);
