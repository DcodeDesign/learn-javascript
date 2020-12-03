/*
* Rappel sur les functions, les prototypes et objets
*/

// function personnalisée + + fonction imbriquée personnalisée
function multiplication(arg1, arg2) {
    function calc(arg1, arg2) {
        return arg1 * arg2;
    }

    return calc(arg1, arg2);
}

console.log('1 :' + multiplication(1, 2));

// function personnalisée + fonction imbriquée anonyme
function multiplication2(arg1, arg2) {
    this.calc = function (arg1, arg2) {
        return arg1 * arg2;
    }
    return this.calc(arg1, arg2);
}

console.log('2 :' + multiplication2(1, 2));

// function anonyme + function imbriquée  anonyme
let multiplication3 = function (arg1, arg2) {
    function calc(arg1, arg2) {
        return arg1 * arg2;
    }

    return calc(arg1, arg2);
}
console.log('3 :' + multiplication3(1, 2));

// function anonyme + function imbriquée  anonyme
let multiplication4 = function (arg1, arg2) {
    this.calc = function (arg1, arg2) {
        return arg1 * arg2;
    }
    return this.calc(arg1, arg2);
}
console.log('4 :' + multiplication4(1, 2));

// function fléchées + function fléchées anonyme
let multiplication5 = (arg1, arg2) => {
    this.calc = (arg1, arg2) => {
        return arg1 * arg2;
    }
    return this.calc(arg1, arg2);
}
console.log('5 :' + multiplication5(1, 2));

// fonction auto invoquée (anonyme) + fonction imbriquée anonyme
(function () {
    this.calc = function (arg1, arg2) {
        return arg1 * arg2;
    }
    console.log('6 :' + this.calc(1, 2));
})();

// fonction fléchée auto invoquée  + fonction imbriquée anonyme
(() => {
    this.calc = function (arg1, arg2) {
        return arg1 * arg2;
    }
    console.log('7 :' + this.calc(1, 2));
})();


// fonction fléchée auto invoquée  + fonction imbriquée anonyme
(() => {
    this.calc = function (arg1, arg2) {
        return arg1 * arg2;
    }
    console.log('7 :' + this.calc(1, 2));
})();

let arrowFunct = (text) => {console.log(text)};
arrowFunct('arrow function');

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
let o = {a: 0}

Object.defineProperty(o, "b", {
    get: function () {
        return this.a + 1;
    }
});

console.log(o.b) // Utilise l'accesseur qui génère a + 1 (qui correspond à 1)

// Utiliser un nom de propriété calculé
var expr = "toto";

var obj2 = {
    get [expr]() {
        return "truc";
    }
};

console.log(obj2.toto); // "truc"

// Accesseurs intelligents / « mémoïsés »
/*
    get notifier() {
        delete this.notifier;
        return this.notifier = document.getElementById("bookmarked-notification-anchor");
    },
*/

function testThis() {
    var $this = this;
    $this.age = 0;
    console.log('testThis ' + $this + ' ' + this);

    (() => {
        // console.log(this);
    })()
}
let test = new testThis();
test;

testThis();
