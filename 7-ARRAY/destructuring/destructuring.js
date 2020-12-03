
//
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

[...all] = [1,2,3,4,5,6,7,8,9]
console.log(all)


//
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({a, b} = {a: 10, b: 20});
console.log(a); // 10
console.log(b); // 20

// Proposition de syntaxe (niveau 4)
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

//
const x = [1, 2, 3, 4, 5]; // On crée un "paquet" de données
const [y, z] = x; // On utilise l'affectation par décomposition
console.log(y); // 1
console.log(z); // 2
