# Les tableaux

Les variables de type Array, ou variables tableaux, sont des variables 
particulières qu’on retrouve dans de nombreux langages de programmation 
et qui permettent de stocker plusieurs valeurs à la fois avec un système 
de clef ou d’indice associé à chaque valeur.

En JavaScript, les tableaux sont avant tout des objets qui dépendent 
de l’objet global Array.

Les tableaux ne sont pas des valeurs primitives. Cependant, nous ne sommes pas 
obligés d’utiliser le constructeur Array() avec le mot clef new pour créer un 
tableau en JavaScript.

En effet, une syntaxe alternative et plus performante (et qu’on préfèrera donc toujours 
à la syntaxe new Array()) est disponible en JavaScript et nous permet des créer des 
tableaux qui vont tout de même pouvoir utiliser les propriétés et méthodes du 
constructeur Array().


Exemples: 
    
       let prenoms = ['Pierre', 'Mathilde', 'Florian', 'Camille'];
       let ages = [29, 27, 29, 30];
       let produits = ['Livre', 20, 'Ordinateur', 5, ['Magnets', 100]];
       
       document.getElementById('p1').innerHTML = prenoms[0] + ' possède 1 ' + produits[2];
       document.getElementById('p2').innerHTML = prenoms[1] + ' a ' + ages[1] + ' ans';
       document.getElementById('p3').innerHTML = produits[4][1] + ' ' + produits[4][0];

parcourir toutes les valeurs d’un tableau:

    let prenoms = ['Pierre', 'Mathilde', 'Florian', 'Camille'];
    let ages = [29, 27, 29, 30];
    let produits = ['Livre', 20, 'Ordinateur', 5, ['Magnets', 100]];
    
    for(let valeur of prenoms){
       document.getElementById('p1').innerHTML += valeur + '<br>';
    }
