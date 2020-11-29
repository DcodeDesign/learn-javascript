# Ternaires

Les structures conditionnelles ternaires (souvent simplement abrégées “ternaires”) correspondent 
à une autre façon d’écrire nos conditions en utilisant une syntaxe basée sur l’opérateur ternaire ? : 
qui est un opérateur de comparaison.

Les ternaires vont utiliser une syntaxe très condensée et nous allons ainsi pouvoir écrire toute une 
condition sur une ligne et accélérer la vitesse d’exécution de notre code.

Utilisation de l'opérateur ternaire

    document.getElementById('p1').innerHTML =
    x >= 10 ? 'x supérieur à 10' : 'x stric. inférieur à 10';
    
Equivalent avec une structure if ... else

    if(x >= 10){
        document.getElementById('p2').innerHTML = 'x supérieur à 10';
    }else{
        document.getElementById('p2').innerHTML = 'x stric. inférieur à 10';
    }
