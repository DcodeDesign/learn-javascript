## JS: L'instruction var
--- 
> Bien que l'instruction *var* n'a pas été retirer du langage par souci de compatiblilié, il est recommandé d'utiliser *const* ou *let*. Cas 2 dernières instruction n'ont pas la même portée que *var*.

Exemple de déclaration de l'instruction var :
```
var x = 1;

console.log(x) // output  : 1
```

>Les déclarations de variables sont traitées avant que le code soit exécuté, quel que soit leur emplacement dans le code. La portée d'une variable déclarée avec var est le contexte d'exécution courant, c'est-à-dire : la fonction qui contient la déclaration ou le contexte global si la variable est déclarée en dehors de toute fonction.

```
a = 1;
var b = 2;
function x() {
  c = 3;   // Lève une exception ReferenceError en mode strict
  var d = 4;
  console.log(d); // output: 4
}

x();

console.log(a); // output: 1
console.log(b); // output: 2
console.log(c); // output: 3
console.log(d); // output: Lève une exception ReferenceError: z is not defined 
```
>Si on affecte une valeur à une variable qui n'a pas été déclarée (le mot-clé var n'a pas été utilisé), cela devient une variable globale (une propriété de l'objet global) lorsque l'affectation est exécutée.

Pour résoudre ce problème on aurait tendance à déclarer *d* en dehors de la fonction, mais attention il faut être conscient que dès que la valeur de *d* est modifiée celle-ci le sera aussi en dehors de la fonction  :

```
var d = 1;

function x() {
  d = 4;
  console.log(d); // output: 4
}

x();

console.log(d); // output: 4
```

#### La remontée de variables (hoisting)
---

Les déclarations de variables (et les déclarations en général) sont traitées avant que n'importe quel autre code soit exécuté. Ainsi, déclarer une variable n'importe où dans le code équivaut à la déclarer au début de son contexte d'exécution. Cela signifie qu'une variable peut également apparaître dans le code avant d'avoir été déclarée. Ce comportement est appelé « remontée » (hoisting en anglais) car la déclaration de la variable est « remontée » au début de la fonction courante ou du contexte global.

```
bla = 2
var bla;
// ...

// est implicitement traité comme :

var bla;
bla = 2;
```

Il est important de noter que la remontée des variables affecte uniquement la déclaration et pas l'initialisation de la valeur. La valeur sera affectée lorsque le moteur accèdera à l'instruction d'affectation. Par exemple :

```
function x() {
  console.log(truc); // undefined
  var truc = 111;
  console.log(truc); // 111
}

// Correspond en fait à : 
function x() {
  var truc;
  console.log(truc); // undefined
  truc = 111;
  console.log(truc); // 111
}
```
#### Déclarer et initialiser deux variables

```
var x = y = 1;
//..

var a = 0, b = 0;
//..


var a = "A";
var b = a;

// est équivalent à :

var a, b = a = "A";

// Attention à l'ordre :
var x = y, y = 'A';
console.log(x + y); // undefined A
```
