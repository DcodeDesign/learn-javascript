/* "obj" est une variable qui contient un objet. Par abus de langage,
* on dira que notre variable EST un objet
*/
let obj = {
    // propriétés de l'objet
    nom: 'Jhon',
    age: 32,
    mail: 'jhon@gmail.com',

    // méthode
    description: function (elem) {
        let text = 'nom: ' + this.nom + ' age: ' + this.age + ' mail: ' + this.mail;
        document.getElementById(elem).innerText = text;
    },
}

let obj2 = {
    // propriétés de l'objet
    salut: 'Jhon'
}


// Initioalisation de l'objet
let p1 = obj.description('p1');
let p2 = obj.description('p2');

// test
console.log(`p1 == p2: ${p1 == p2}`);
console.log(`p1 === p2: ${p1 === p2}`);
console.log(`obj.description('p1') === obj.description('p2')  ${obj.description('p1') === obj.description('p2')}`);

console.log('typeof p1 :' + typeof p1);
console.log('typeof obj: ' + typeof obj);
console.log('Object.is(obj , obj2): ' + Object.is(obj , obj2));
console.log('Object.is(obj , obj): ' + Object.is(obj , obj));
console.log('Object.is(p1 , p2): ' + Object.is(p1 , p2));
console.log('typeof obj.description(\'p1\'): ' + typeof obj.description('p1'));

console.log(obj.age);

