# array methods

    push()
    pop()
    unshift()
    shift()
    splice()
    join()
    slice()
    concat()
    includes()

## Les propriétés et les méthodes du constructeur Array() :

### Les méthodes push() et pop()
La méthode push() va nous permettre d’ajouter des éléments en fin 
de tableau et va retourner la nouvelle taille du tableau. Nous allons 
passer les éléments à ajouter en argument.

La méthode pop() va elle nous permettre de supprimer le dernier élément 
d’un tableau et va retourner l’élément supprimé.    

exemples:
    
    let prenoms = ['Pierre', 'Mathilde'];
    let ages = [29, 27, 32];
    
    /*On ajoute 2 éléments à "prenoms" et on récupère la nouvelle taille du tableau
     *renvoyée par push() dans une variable "taille"*/
    let taille = prenoms.push('Florian', 'Camille');
    
    //On supprime le dernier élément de ages et on récupère l'élément supprimé dans del
    let del = ages.pop();
    
    document.getElementById('p1').innerHTML = taille + ' éléments dans prenoms';
    document.getElementById('p2').innerHTML = '"' + del + '" supprimé de ages';
    
### Les méthodes unshift() et shift()
    
La méthode unshift() va nous permettre d’ajouter des éléments en début de tableau 
et va retourner la nouvelle taille du tableau. Nous allons passer les éléments à 
ajouter en argument.

La méthode shift() va elle nous permettre de supprimer le premier élément d’un tableau 
et va retourner l’élément supprimé.

exemples: 

    let prenoms = ['Pierre', 'Mathilde'];
    let ages = [29, 27, 32];
    
    /*On ajoute 2 éléments au début de "prenoms" et on récupère la nouvelle taille
     *du tableau renvoyée par push() dans une variable "taille"*/
    let taille = prenoms.unshift('Florian', 'Camille');
    
    //On supprime le premier élément de ages et on récupère l'élément supprimé dans del
    let del = ages.shift();
    
    
    document.getElementById('p1').innerHTML = 'Tableau prenoms : ' + prenoms;
    document.getElementById('p2').innerHTML = taille + ' éléments dans prenoms';
    document.getElementById('p3').innerHTML = '"' + del + '" supprimé de ages';

### La méthode splice()

Pour ajouter, supprimer ou remplacer des éléments dans un tableau, 
on peut également utiliser splice().

L’avantage de cette méthode est qu’elle nous permet d’ajouter, 
de supprimer ou de remplacer des éléments n’importe où dans un tableau.

La méthode splice() va pouvoir prendre trois arguments : une position 
de départ à partir d’où commencer le changement, le nombre d’éléments à 
remplacer et finalement les éléments à ajouter au tableau.

En précisant la position de départ 0, les changements seront effectués 
à partir du début du tableau. En précisant la position 1, ils se feront 
à partir du deuxième élément, etc. En précisant une position négative, 
les changements seront faits en comptant à partir de la fin : -1 pour 
commencer en partant du dernier élément, -2 pour commencer en partant 
de l’avant dernier élément, etc.

exemple:

    et prenoms = ['Pierre', 'Mathilde', 'Florian', 'Camille'];
    let ages = [29, 27, 28, 30];
    
    /*On insère 'Thomas' et 'Manon' dans le tableau prenoms, après le deuxième élément
     *(Mathilde) et sans supprimer d'éléments*/
    prenoms.splice(2, 0, 'Thomas', 'Manon');
    
    /*On supprime les deux éléments après le premier ( c'est à dire 27 et 28) et on
     *insère 35 après le premier élément (29)*/
    let del = ages.splice(1, 2, 35);
    
    document.getElementById('p1').innerHTML = prenoms;
    document.getElementById('p2').innerHTML = ages;
    document.getElementById('p3').innerHTML = '"' + del + '" supprimé de ages';

### La méthode join()
La méthode join() retourne une chaine de caractères créée en concaténant les différentes 
valeurs d’un tableau. Le séparateur utilisé par défaut sera la virgule mais nous allons 
également pouvoir passer le séparateur de notre choix en argument de join().

    let prenoms = ['Pierre', 'Mathilde', 'Florian', 'Camille'];
    let ages = [29, 27, 28, 30];
    
    /*On insère 'Thomas' et 'Manon' dans le tableau prenoms, après le deuxième élément
     *(Mathilde) et sans supprimer d'éléments*/
    prenoms.splice(2, 0, 'Thomas', 'Manon');
    
    /*On supprime les deux éléments après le premier ( c'est à dire 27 et 28) et on
     *insère 35 après le premier élément (29)*/
    let del = ages.splice(1, 2, 35);
    
    document.getElementById('p1').innerHTML = prenoms.join(' - ');
    document.getElementById('p2').innerHTML = ages.join(' / ');
    document.getElementById('p3').innerHTML = '"' + del + '" supprimé de ages';

### La méthode slice()
La méthode slice() renvoie un tableau créé en découpant un tableau de départ.

Cette méthode va prendre en premier argument facultatif la position de départ 
où doit commencer la découpe de notre tableau de départ. Si la position passée 
est un nombre négatif, alors le début de la découpe sera calculé à partir de la 
fin du tableau de départ. Si aucune position de départ n’est passée, la découpe 
commencera depuis le début du tableau de départ.

On va également pouvoir lui passer en second argument facultatif la position où 
doit s’arrêter la découpe du tableau de départ. Si la position passée est un nombre 
négatif, alors la fin de la découpe sera calculé à partir de la fin du tableau de départ. 
Si aucune position de fin n’est passée, alors on récupèrera le tableau de départ jusqu’à 
la fin pour créer notre nouveau tableau.

    let prenoms = ['Pierre', 'Mathilde', 'Thomas', 'Manon', 'Florian', 'Camille'];
    let ages = [29, 27, 28, 30];
    
    let sliceprenoms = prenoms.slice(2, 4);
    let sliceages = ages.slice(2);
    
    document.getElementById('p1').innerHTML = sliceprenoms.join(' - ');
    document.getElementById('p2').innerHTML = sliceages.join(' / ');

### La méthode concat()
La méthode concat() va nous permettre de fusionner différents tableaux entre eux pour en créer 
un nouveau qu’elle va renvoyer.

Cette méthode va prendre en arguments les tableaux que l’on souhaite concaténer à un premier de 
départ qu’on va pouvoir choisir arbitrairement.

Notez que l’on peut fusionner autant de tableaux que l’on veut entre eux. Les tableaux de départ 
ne sont pas modifiés.

exemple:

    let prenoms = ['Pierre', 'Mathilde', 'Thomas', 'Manon', 'Florian', 'Camille'];
    let ages = [29, 27, 28, 30];
    let sports = ['Trail', 'Triathlon', 'Natation'];
    
    let tbglobal = prenoms.concat(ages, sports);

### La méthode includes()
La méthode includes() permet de déterminer si un tableau contient une valeur 
qu’on va passer en argument. Si c’est le cas, includes() renvoie true. Dans 
le cas contraire, cette méthode renvoie false.

Cette méthode est sensible à la casse (une majuscule est considérée comme 
une entité différente d’une minuscule).

    let prenoms = ['Pierre', 'Mathilde', 'Thomas', 'Manon', 'Florian', 'Camille'];
    
    if(prenoms.includes('Mathilde')){
        document.getElementById('p1').innerHTML = 'Mathilde est dans le tableau';
    }
    
    if(prenoms.includes('mathilde')){
        document.getElementById('p2').innerHTML = 'mathilde est dans le tableau';
    }
