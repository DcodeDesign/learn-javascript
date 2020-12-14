## JS: La déclaration const
---
La déclaration const permet de créer une constante nommée accessible uniquement en lecture. Cela ne signifie pas que la valeur contenue est immuable, uniquement que l'identifiant ne peut pas être réaffecté. Autrement dit la valeur d'une constante ne peut pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau.

```
const number = 42;
console.log(number); // output : 42
```
>Cette déclaration permet de créer une constante qui peut être globale ou locale pour la fonction dans laquelle elle a été déclarée. Les constantes font partie de la portée du bloc (comme les variables définies avec let). À la différence des variables définies avec var, les constantes déclarées au niveau global ne sont pas des propriétés de l'objet global (window dans le cas du navigateur). Il est nécessaire d'initialiser une constante lors de sa déclaration. Au sein d'une même portée, il est impossible d'avoir une constante qui partage le même nom qu'une variable ou qu'une fonction.

Attention, la déclaration const crée une référence en lecture seule vers une valeur. Cela ne signifie pas que la valeur référencée ne peut pas être modifiée ! Ainsi, si le contenu de la constante est un objet, l'objet lui-même pourra toujours être modifié.

```
const MA_FAV = 7;
```
>Les conventions d'écritures veulent que les constantes soient écrite en majuscule pour les diférenciers des autres variables.

Attention à la portée des constantes :

```
const MA_FAV = 7;
if (MA_FAV === 7) {
  const MA_FAV = 9;
  const SEC_FAV = 8; 
  console.log(MA_FAV); // output : 9
  console.log(SEC_FAV); // output : 8
}
console.log(MA_FAV); // output : 7
console.log(SEC_FAV); // output : SEC_FAV is not defined
console.log('on continue...'); // Ne sera jamais exécuté
```

La déclaration d'un constante doit toujours être initialisée

```
const MY_VAR; // SyntaxError: Missing initializer in const 
```

Une constante peut contenir des objets, ceux-ci ne peuvent être écrasé, par contre leur clès ne sont pas protéger et celles-ci ne peuvent être modifiée.

```
// const fonctionne également avec les objects
const monObjet = {"clé": "valeur"};

// Écraser l'objet échouera comme précédemment
monObjet = {"autreClé": "valeur"};

// En revanche, les clés d'un objet ne sont pas
// protégés et on peut donc, de façon valide, avoir 
monObjet.clé = "autreValeur";
// On utilisera Object.freeze() afin qu'un objet soit immuable

// Il en va de même avec les tableaux 
const mon_tableau = [];
// On peut ajouter des éléments au tableau 
mon_tableau.push("A"); // ["A"]
// Mais on ne peut pas affecter une nouvelle valeur
mon_tableau = ["B"]; // lève une exception 
```

