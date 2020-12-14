## JS : Les fonctions fléchées
---
Une expression de fonction fléchée (arrow function en anglais) permet d’avoir une syntaxe plus courte que les expressions de fonction et ne possède pas ses propres valeurs pour this, arguments, super, ou new.target. Les fonctions fléchées sont souvent anonymes et ne sont pas destinées à être utilisées pour déclarer des méthodes.

Démonstration :

```
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```

>Deux facteurs sont à l’origine de la conception des fonctions fléchées : une syntaxe plus courte et l’absence de this spécifique à la fonction. Sur ce dernier point, cela signifie qu’une fonction fléchée ne lie pas son propre this au sein de la fonction (il en va de même avec arguments, super ou new.target).

Exemples :

```
([param] [, param]) => {
   instructions
}

(param1, param2, …, param2) => expression
// équivalent à 
(param1, param2, …, param2) => {
  return expression;
}

// Parenthèses non nécessaires quand il n'y a qu'un seul argument
param => expression

// Une fonction sans paramètre peut s'écrire avec un couple 
// de parenthèses
() => {
  instructions
}

// Gestion des paramètres du reste et paramètres par défaut
(param1, param2, ...reste) => {
  instructions
}
(param1 = valeurDefaut1, param2, …, paramN = valeurDefautN) => { 
  instructions
}

// Gestion de la décomposition pour la liste des paramètres
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f(); 
```

Comparaison:

```
var a = [
  "We're up all night 'til the sun",
  "We're up all night to get some",
  "We're up all night for good fun",
  "We're up all night to get lucky"
];

// Sans la syntaxe des fonctions fléchées 
var a2 = a.map(function (s) { return s.length });
// [31, 30, 31, 31]

// Avec, on a quelque chose de plus concis
var a3 = a.map( s => s.length);
// [31, 30, 31, 31]
```

> [https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fleche](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)




