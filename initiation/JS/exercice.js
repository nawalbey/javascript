// var prenom="nawal";

// var monNumero= 0616223;

// var monNum= "0616223915";

// var booleanfalse = false; // boolean

// var booleantrue =true;// boolean

// var varNULL = null; // null

// console.log(prenom);
// alert("voici mon prenom : nawal");
// window.alert("Super, tu es arrivé sur mon site !");
// document.write("A la pause vous aurez des Haribos Pik !");
// window.prompt("Question: on est quel jour ?", "jour de la semaine");
// prompt("Question: on est quel jour ?", "jour de la semaine");
// var monPrenom = prompt();
// document.write(monPrenom);

// var unBooleen=false;//--true
// console.log(unBooleen)
// unBooleen="true";
// console.log(unBooleen);
// console.log(typeof unBooleen);
// const PAYS="france";
//  PAYS="italie";
// document.write(PAYS);

// var premierPrenom= window.prompt("cest quoi ton prenom");
// document.write(premierPrenom);
// console.log(premierPrenom);
// alert(premierPrenom);

var nb1 = prompt();
console.log(typeof nb1);
nb1 = parseInt(nb1);
console.log(typeof nb1);
var nb2 = 7;
var resultat = nb1 % nb2;
resultat += nb2;
console.log(resultat);
alert(resultat);

var ht = prompt();

var ttc = ht * 1.2;

document.write(ttc)

// console.log(fruits);
// //Ajouter à la fin du tableau
// var newLength = fruits.push("Orange");
// // ["Apple", "Banana", "Orange"]

// var lastElement = fruits.pop();

// console.log(
//   "Tableau fruits après avoir supprimé le dernier élement : " + fruits
// );
// console.log("La taille finale du tableau : " + fruits.length);
// console.log(typeof fruits);
// console.log("La valeur du dernier élement supprimé : " + lastElement);

//1-une fonction sans parametre et sans valeur de retour
function affichege () {
    console.log( coucou);
}

affichage();

//2- une fonction avec un parametre et sans valeur de retour
function affichagesurlapageweb( chaineCaractere) {
    document.write(chaineCaracter);

}

affichagesurlapageweb("narci est cool</p>");
affichagesurlapageweb("wassila est belle</p>");

//console.log(affichagesurlapageweb("<p>Cynthia est curieuse</p>"));

var aff=affichagesurlapageweb("p>cynthia est curieuse</p>")

console.log(aff);

//2- une fonction avec deux parametre et avec une valeur de retour
function aditions( num1, num2) {
    var resultat= num1 + num2;
    // moy clé""return" nous permet d'avoir une valeur de retour au moment ou on execute la fonction
    //attention avec ce mot cle "return" on aura toujours une seule valeur de retour
    // return resultat + "coucou"
    return resultat;
    
}

//quand on execute une fontion qui prend des parametres, en general au moment d'implantation de la fonction, les parametres jouent le role des variables 
additions(2, 3);

