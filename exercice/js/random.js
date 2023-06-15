// genere un nombre aléatoire, entier "X",  tel que 0 <= X < 12

//  Déclarer une variable "x"
var x;

// exécuter la fonction "random" qui génère un nombre  entre [0, 1[, autrement dit : (0 <= x < 1)
x = Math.random();

// 0 <= x < 7 (un chiffre décimal en [0, 7[)
var x = x * 7;

// Affichage du résultat sur la page web
document.write(x + "<hr>");

// un nombre entier et aléatoire entre 0 et 6 (0 <= x <= 6)
x = Math.floor(x);

// affichage du résulatat sur la page web
document.write(x + "<hr>");

// On a déclaré une variable "semaine" de type tableau indexé (array) de 7 élément 
var semaine = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];
// tableau associatif
var semaine1 = {
  "jour1": "lundi",
  "jour2": "mardi",
  "jour3": "mercredi",
  "jour4": "jeudi",
  "jour5": "vendredi",
 "jour6": "samedi",
  "jour7": "dimanche",
};
//
document.write(semaine[x]);
