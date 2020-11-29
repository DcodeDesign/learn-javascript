# Let et var

## La remontée ou « hoisting » des variables

Lorsqu’on utilise la syntaxe avec var, on n’est pas obligé de déclarer la 
variable avant de la manipuler dans le code, on peut très bien effectuer 
des manipulations en haut du code et la déclarer en fin de code.

Cela est possible car le JavaScript va traiter les déclarations de 
variables effectuées avec var avant le reste du code JavaScript. 
Ce comportement est appelé remontée ou hoisting.

Ce comportement a été jugé comme inadapté dans les versions récentes 
de JavaScript et a donc été corrigé dans la déclaration de variables 
avec let : les variables utilisant la syntaxe let doivent obligatoirement 
être déclarées avant de pouvoir être utilisées.

Le but de ce comportement est de pousser les développeurs à créer des scripts 
plus compréhensibles et plus clairs en apportant de la structure au code 
avec notamment la déclaration des différentes variables au début de chaque script.

## La redéclaration de variables
Avec l’ancienne syntaxe var, on avait le droit de déclarer plusieurs fois une 
même variable en utilisant à chaque fois var (ce qui avait pour effet de modifier 
la valeur stockée).

La nouvelle syntaxe avec let n’autorise pas cela. Pour modifier la valeur stockée 
dans une variable avec la nouvelle syntaxe, il suffit d’utiliser le nom de la 
variable et de lui affecter une autre valeur.

Cette décision a été prise une nouvelle fois pour des raisons de clarté et 
de pertinence du code. En effet, il n’y a aucun intérêt à redéfinir une même 
variable plusieurs fois.

    var myVar = 'Jhon';
    var myVar = 'Julie';
    
    let secondVar = 'Pierre';
    secondVar = 'Jean'
