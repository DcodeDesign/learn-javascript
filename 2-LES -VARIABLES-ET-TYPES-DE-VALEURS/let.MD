## JS: L'instruction let
---
>L'instruction let permet de déclarer une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.

```
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1

```

### Les portées de bloc avec let
Les variables déclarées avec let appartiennent à la portée du bloc dans lequel elles sont définies et indirectement aux portées des blocs de ce bloc. D'une certaine façon let fonctionne comme var, la seule différence dans cette analogie est que let fonctionne avec les portées de bloc et var avec les portées des fonctions :
```
if (x > y) {
  let gamma = 12.7 + y;
  i = gamma * x;
}

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // c'est la même variable !
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // c'est une variable différente
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```
### Zone morte temporaire (Temporal Dead Zone / TDZ)  et les erreurs liées à let

```
if (x) {
  let toto;
  let toto; // SyntaxError
}

function faire_quelque_chose() {
  console.log(truc); // undefined
  console.log(toto); // ReferenceError
  let toto = 2;
  var truc = 1;
}
```
