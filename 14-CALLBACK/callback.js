/**
 * Exemple 1
 */
function myDisplayer(some) {
    document.getElementById('some').innerHTML = some;
}
function myCalculator (num1, num2, myCallBack){
    let sum = num1 + num2;
    myCallBack(sum);
}

myCalculator(5, 6, myDisplayer)
// Lorsque vous passez une fonction comme argument, n'oubliez pas de ne pas utiliser de parenthèses.

/**
 * Exemple 2
 */
function salutation(name) {
    console.log('Bonjour ' + name);
}

function processUserInput(callback) {
    var name = 'Jean';
    callback(name);
}

processUserInput(salutation);
