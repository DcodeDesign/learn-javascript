# Structures de contrôle, conditions et opérateurs

## Opérateurs

    let x = 4; //On stocke le chiffre 4 dans x
    
    /*Les comparaisons sont effectuées avant l'affectation. Le JavaScript va donc
     *commencer par comparer et renvoyer true ou false et nous allons stocker ce
     *résultat dans nos variables test*/
    let test1 = x == 4;
    let test2 = x === 4;
    let test3 = x == '4';
    let test4 = x === '4';
    let test5 = x != '4';
    let test6 = x !== '4';
    let test7 = x > 4;
    let test8 = x >= 4;
    let test9 = x < 4;
    
    alert('Valeur dans x égale à 4 (en valeur) ? : ' + test1 +
          '\nValeur dans x égale à 4 (valeur & type) ? : ' + test2 +
          '\nValeur dans x égale à "4" (en valeur) ? : ' + test3 +
          '\nValeur dans x égale à "4" (valeur & type) ? : ' + test4 +
          '\nValeur dans x différente de "4" (en valeur) ? : ' + test5 +
          '\nValeur dans x différente de "4" (valeur & type) ? : ' + test6 +
          '\nValeur dans x strictement supérieure à 4 ? : ' + test7 +
          '\nValeur dans x supérieure ou égale à 4 ? : ' + test8 +
          '\nValeur dans x strictement inférieure à 4 ? : ' + test9);
    
## Les conditions

### if

    let x = 4;
    let y = 0;
    
    if(x > 1){
        alert('x contient une valeur strictement supérieure à 1');
    }
    
    if(x == y){
        alert('x et y contiennent la même valeur');
    }
    
    if(y){
        alert('La valeur de y est évaluée à true');
    }
    
### if...else

    let x = 0.5;
    
    if(x > 1){
        alert('x contient une valeur strictement supérieure à 1');
    }else{
        alert('x contient une valeur inférieure ou égale à 1');
    }

### if…else if…else

    let x = 0.5;
    
    if(x > 1){
        alert('x contient une valeur strictement supérieure à 1');
    }else if(x == 1){
        alert('x contient la valeur 1');
    }else{
        alert('x contient une valeur strictement inférieure à 1');
    }

## Opérateurs logiques
Opérateur (nom)	Opérateur (symbole)	Description

    AND (ET)    &&	Lorsqu’il est utilisé avec des valeurs booléennes, renvoie true si toutes les comparaisons sont évaluées à true ou false sinon
        if(x >= 0 && x <= 10){}
        
    OR (OU)	    ||	Lorsqu’il est utilisé avec des valeurs booléennes, renvoie true si au moins l’une des comparaisons est évaluée à true ou false sinon
        if(y < -10 || y > 10){}
        
    NO (NON)    !	Renvoie false si une comparaison est évaluée à true ou renvoie true dans le cas contraire
         if(!(x <= 2)){}

    
    
   
