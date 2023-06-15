// Math.random()
// La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[ (ce qui signifie que 0 est compris dans
//l'intervalle mais que 1 en est exclu) selon une distribution approximativement uniforme sur cet intervalle.
//Ce nombre peut ensuite être multiplié afin de couvrir un autre intervalle. La graine (seed) du générateur est choisie par l'algorithme et ne peut
// pas être choisie ou réinitialisée par l'utilisateur.
// 1- Déclarer une fonction "fillArray" qui prend en paramètre un entier "num" et elle retourne un tableau "addElement"
// 2- dans la fonction :

function fillArray(num) {
  // a/Déclarer une variable de type tableau "addElement"
  var addElement = [];
  // b/ Déclarer une variable "elem"
  var elem;
  // c/Dans une boucle "for", utiliser une boîte dialogue afin de saisir des données, nous allons stocker la valeur de retour dans la variable "elem" (nombre de l'affichage de la boîte de dialogue dépend du nombre qui vient du paramètre utilisé dans la fonction)
  //   d/ Les données saisies à partir de la boîte de dialogue seront stockées dans le tableau "addElement"
  for (var i = 0; i < num; i++) {
    elem = prompt("Saisir de données !");
    addElement.push(elem);
  }

  return addElement;
}

// 1- Déclarer une fonction "fillArray" qui prend en paramètre un entier "num" et elle retourne un tableau "addElement"
// 2- dans la fonction :

function fillArray(num) {
  // a/Déclarer une variable de type tableau "addElement"
  var addElement = [];
  // b/ Déclarer une variable "elem"
  var elem;
  // c/Dans une boucle "for", utiliser une boîte dialogue afin de saisir des données, nous allons stocker la valeur de retour dans la variable "elem" (nombre de l'affichage de la boîte de dialogue dépend du nombre qui vient du paramètre utilisé dans la fonction)
  //   d/ Les données saisies à partir de la boîte de dialogue seront stockées dans le tableau "addElement"
  for (var i = 0; i < num; i++) {
    elem = prompt("Saisir de données !");
    addElement.push(elem);
  }

  return addElement;
}

// execution de la fonction :
// var fruits = fillArray(3);
// console.log(fruits);
