//1- Saisir deux valeurs à partir de deux champs de formulaire
var nom = prompt("");
var age = prompt("");

//-une valeur en string et d'autre en numérique
if (isNaN(nom)) {
  console.log(nom + "est bien string");
} else {
  console.log(nom + "il n'est pas string");
}

//2- Vérifier le type des deux valeurs (si elles sont respectivement bien string et numérique)
//3- Créer une fonction qui prend ces deux valeurs en paramètre et elle concatène les deux valeurs en question afin de nous afficher la phrase suivante :
//"Je m'appelle ... et j'ai ... ans"

if (isNaN(age)) {
  console.log(age + "n'est pas un nombre");
} else {
  console.log(age + "c'est un nombre");
}
