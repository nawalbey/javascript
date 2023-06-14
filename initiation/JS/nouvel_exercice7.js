// Jour Suivant
// Ecrivez un programme jour_suivant.js qui fait saisir un nom de jour de la semaine à l'utilisateur, puis affiche le nom du jour suivant.

// Les erreurs de saisie (jour incorrect) doivent être gérées.

// Effectuez l'exercice avec des if/if else puis avec un switch

var jour = prompt("jour_suivant.js");

var semaine = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

if (jour === semaine[0]) {
  document.write(`Demain nous serons ${semaine[1]}`);
} else if (jour === semaine[1]) {
  document.write(`Demain nous serons ${semaine[2]}`);
} else if (jour === semaine[2]) {
  document.write(`Demain nous serons ${semaine[3]}`);
} else if (jour === semaine[3]) {
  document.write(`Demain nous serons ${semaine[4]}`);
} else if (jour === semaine[4]) {
  document.write(`Demain nous serons ${semaine[5]}`);
} else if (jour === semaine[5]) {
  document.write(`Demain nous serons ${semaine[6]}`);
} else if (jour === semaine[6]) {
  document.write(`Demain nous serons ${semaine[0]}`);
} else {
  document.write("merci d'écrire un jour");
}

//Comparaison de deux nombres
// Ecrivez un programme 07_comparaison.js qui fait saisir deux nombres puis compare leurs valeurs et affiche un message approprié (plus grand, plus petit, égal).

var nombre = prompt("veuillez ecrire un chiffre");
var nombre2 = prompt("veuillez ecrire un chiffre");

if (nombre < nombre2) {
  document.write(nombre + "inferieur" + nombre2);
} else if (nombre == nombre2) {
  document.write(nombre + "egale" + nombre2);
}

// 1- Déclarer une fonction "fillArray" qui prend en paramètre un entier "num"
//  2- dans la fonction :
// 	a/Déclarer une variable de type tableau "addElement"
//     b/Dans une boucle "for", utiliser une boîte dialogue afin de saisir des données (nombre de l'affichage de la boîte de dialogue dépend du nombre qui vient du paramètre utilisé dans la fonction)
//     c/ Les données saisies à partir de la boîte de dialogue seront stockées dans le tableau "addElement"
