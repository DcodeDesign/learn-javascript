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

/*
* Rappel sur les functions, les prototypes et objets
*/

// function personnalisée + + fonction imbriquée personnalisée
function multiplication(arg1, arg2){
    function calc(arg1,arg2) {
        return arg1 * arg2;
    }
    return calc(arg1,arg2);
}
console.log('1 :' + multiplication(1,2));

// function personnalisée + fonction imbriquée anonyme
function multiplication2(arg1, arg2){
    this.calc= function (arg1,arg2) {
        return arg1 * arg2;
    }
    return this.calc(arg1,arg2);
}
console.log('2 :' +multiplication2(1,2));

// function anonyme + function imbriquée  anonyme
let multiplication3 = function(arg1, arg2) {
    function calc(arg1, arg2) {
        return arg1 * arg2;
    }

    return calc(arg1, arg2);
}
console.log('3 :' +multiplication3(1,2));

// function anonyme + function imbriquée  anonyme
let multiplication4 = function(arg1, arg2) {
    this.calc = function (arg1, arg2) {
        return arg1 * arg2;
    }
    return this.calc(arg1, arg2);
}
console.log('4 :' +multiplication4(1,2));

// function fléchées + function fléchées anonyme
let multiplication5 = (arg1, arg2) => {
    this.calc = (arg1, arg2) => {
        return arg1 * arg2;
    }
    return this.calc(arg1, arg2);
}
console.log('5 :' +multiplication5(1,2));

// fonction auto invoquée (anonyme) + fonction imbriquée anonyme
(function() {
    this.calc = function (arg1, arg2) {
        return arg1 * arg2;
    }
   console.log('6 :' +this.calc(1, 2));
})();

// fonction fléchée auto invoquée  + fonction imbriquée anonyme
(() => {
    this.calc = function (arg1, arg2) {
        return arg1 * arg2;
    }
    console.log('7 :' + this.calc(1, 2));
})();

/*
* Get in objet
*/

const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
        if (this.log.length === 0) {
            return undefined;
        }
        return this.log[this.log.length - 1];
    }
};
console.log(obj.latest);

// Afin d'ajouter un accesseur à un objet qui existe déjà, on peut utiliser la méthode
let o = { a:0 }

Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });

console.log(o.b) // Utilise l'accesseur qui génère a + 1 (qui correspond à 1)

// Utiliser un nom de propriété calculé
var expr = "toto";

var obj2 = {
    get [expr]() { return "truc"; }
};

console.log(obj2.toto); // "truc"

// Accesseurs intelligents / « mémoïsés »
/*
    get notifier() {
        delete this.notifier;
        return this.notifier = document.getElementById("bookmarked-notification-anchor");
    },
*/
