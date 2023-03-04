/*exos 1
 alert au demarrage de la page alert("hello world"); au clic sur le bouton
 document.write("<h1><b>hello world</b></h1>");

/*var nomExterne = "Hein ";
var prenom = "Terieur ";/*

//exos 2--------------------------------------------------------------------------------
function portee(nom) {

  nomGlobale = "Halle ";

  console.log(nomGlobale + nom + prenom);

  console.log(nomGlobale + nomExterne + prenom);

}

portee("Ex ");

console.log(prenom);// provoque une erreur*/


//exos 3--------------------------------------------------------------------------------
/*Cette fonction utilise l'objet arguments pour récupérer la liste des
 paramètres passés à la fonction. Elle vérifie ensuite le nombre de paramètres
 pour déterminer le type de forme géométrique détecté, puis calcule le
 périmètre correspondant en fonction du nombre de côtés. Les résultats sont
 affichés en boîte d'alerte, avec la désignation du type de forme détecté et/ le périmètre calculé.
*/

function calculerPerimetre() {
  var perimetre = 0;
  var nbCotes = arguments.length;

  /**Explication var nbCotes: L'objet arguments est un objet Array-like disponible à l'intérieur de toutes les fonctions JavaScript. Il contient une liste des arguments passés à la fonction lors de son appel, y compris les arguments qui n'ont pas été déclarés comme paramètres formels de la fonction.

  Dans cet exemple, la variable nbCotes est initialisée avec la longueur de la liste arguments, ce qui signifie qu'elle contient le nombre d'arguments passés à la fonction. Cette valeur est ensuite utilisée pour déterminer le type de forme géométrique détecté et pour calculer le périmètre correspondant en fonction du nombre de côtés. */

  if (nbCotes == 0) {
    alert("Erreur : aucun paramètre spécifié.");
  } else if (nbCotes == 1) {
    perimetre = 4 * arguments[0];
    alert("Carré détecté : périmètre = " + perimetre);
  } else if (nbCotes == 2) {
    perimetre = 2 * (arguments[0] + arguments[1]);
    alert("Rectangle détecté : périmètre = " + perimetre);
  } else if (nbCotes == 3) {
    perimetre = arguments[0] + arguments[1] + arguments[2];
    alert("Triangle détecté : périmètre = " + perimetre);
  } else {
    for (var i = 0; i < nbCotes; i++) {
      perimetre += arguments[i];
    }
    alert(nbCotes + "-gon détecté : périmètre = " + perimetre);
  }
}

/*La boucle for est utilisée dans ce script pour calculer le périmètre d'un polygone régulier ayant plus de trois côtés. Dans le code fourni, les cas pour lesquels le nombre de côtés est égal à 0, 1, 2 ou 3 sont traités séparément, car ces formes géométriques spécifiques ont des formules de périmètre distinctes.

Dans le cas où le nombre de côtés est supérieur à 3, il n'y a pas de formule générale pour calculer le périmètre, car cela dépend de la longueur de chaque côté individuellement. Par conséquent, la boucle for est utilisée pour ajouter chaque longueur de côté (passée en arguments) au périmètre total. Le nombre de côtés est également inclus dans le message d'alerte pour indiquer le type de polygone détecté.*/

//changer couleur de fond
function changeColor() {
  document.body.style.backgroundColor = "black";
}
changeColor();

//exos 4--------------------------------------------------------------------------------

