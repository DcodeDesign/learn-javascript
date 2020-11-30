# Objet littéral
On parle ici d’objet « littéral » car nous avons défini 
chacune de ses propriétés et de ses méthodes lors de la création, 
c’est-à-dire littéralement.

Pour créer un objet littéral, on utilise une syntaxe utilisant une paire 
d’accolades { … } qui indique au JavaScript que nous créons un objet.

Nos objets vont généralement être stockés dans des variables. Par abus de langage, 
on confondra alors souvent la variable et l’objet et on parlera donc « d’objet » 
pour faire référence à notre variable stockant une valeur de type objet. 
Dans l’exemple ci-dessus, on dira donc qu’on a 
créé un objet nommé « utilisateur ».


## Les objets

    typeof {a:1} === 'object';

## Utiliser la méthode Array.isArray ou Object.prototype.toString.call
### afin de différencier les objets des tableaux

    typeof [1, 2, 4] === 'object';
    typeof new Date() === 'object';
    typeof /regex/ === 'object'; // Voir la section sur les expressions rationnelles

## Les expressions suivantes sont source de confusion
### à ne pas utiliser sous cette forme

    typeof new Boolean(true) === 'object';
    typeof new Number(1) === 'object';
    typeof new String("abc") === 'object';


## Les fonctions

    typeof function(){} === 'function';
    typeof class C {} === 'function';
    typeof Math.sin === 'function';
