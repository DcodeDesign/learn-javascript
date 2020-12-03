let numbers = [
    'task 1',
    'task 2',
    'task 3',
    'task 4'
]
let paragraphe = numbers.map(item => '<p>' +  item + '</p>');

let elem = document.getElementById("liste");
paragraphe.forEach((item) => {
    elem.innerHTML += item;
    console.log('test');
});

console.log(paragraphe)
