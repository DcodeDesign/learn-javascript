/*
* EXEMPLE 1
*/

/*
this.id = 0;

const module = {
    id: 42,
    getId : function () {
        return this.id;
    }
}

const unboundGetId = module.getId; // The function gets invoked at the global scope
console.log(unboundGetId());


const boundGetId = unboundGetId.bind(module)
console.log(boundGetId());
*/


/*
* EXEMPLE 2
*/

/*
function calcSum(arg1, arg2) {
    return arg1 + arg2;
}

let calc = calcSum(1,2);
console.log(calc);

let Bindcalc = calcSum.bind(1,2);
console.log(calc);

console.log(Bindcalc(2));

*/

/*
* Exemple 3
*/
/*
function Proto() {
    this.arg = 'Initialisation de arg';
    // console.log(this); // scope Fleur
}

// On déclare floraison après un délai d'une seconde
Proto.prototype.display = function() {
    window.setTimeout(this.declare.bind(this), 2000);
};

Proto.prototype.declare = function() {
    console.log('Declaration de arg : ' + this.arg);
    // console.log('Je suis une fleur avec ' + this.nbPétales + ' pétales !');
};

var proto = new Proto();
proto.display();
*/

let user = {
    prenom: 'jhon',
    sayHi() {
        console.log(`Hello ${this.prenom}`);
    }
}
user.sayHi();

let newFunc = user.sayHi.bind(user);
newFunc();
// console.log(newFunc)

const btn =  document
