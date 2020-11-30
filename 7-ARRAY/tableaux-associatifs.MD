# tableau associatifs

Dans nombre d’autres langages informatique (dont le PHP, par exemple), 
on peut créer des tableaux en choisissant d’attribuer une clef textuelle 
à chaque nouvelle valeur. On appelle ces tableaux des tableaux associatifs.

En JavaScript, ce type de tableau n’existe tout simplement pas. La chose 
qui va le plus se rapprocher d’un tableau associatif en JavaScript est 
finalement un objet littéral.

Par ailleurs, notez qu’on va pouvoir utiliser une boucle for… in pour parcourir 
les propriétés d’un objet littéral une à une. La boucle for…in est l’équivalent 
de la boucle for…of mais pour les objets.


    let pierre = {
        'prenom' : 'Pierre',
        'age' : 29,
        'sport' : 'trail',
        'cours' : ['HTML', ' CSS', ' JavaScript']
    };
    
    for(let propriete in pierre){
       document.getElementById('p1').innerHTML += pierre[propriete] + '<br>';
    }
