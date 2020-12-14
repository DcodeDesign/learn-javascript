## JS: Les prototypes
---
Le JavaScript est un langage orienté objet basé sur la notion de prototypes.

Dans les langages orientés objet utilisant des prototypes comme le JavaScript, tout est objet et il n’existe pas de classes et l’héritage va se faire au moyen de prototypes.

>Avant tout, je tiens à vous rappeler que les fonctions en JavaScript sont avant tout des objets. Lorsqu’on créé une fonction, le JavaScript va automatiquement lui ajouter une propriété prototype qui ne va être utile que lorsque la fonction est utilisée comme constructeur, c’est-à-dire lorsqu’on l’utilise avec la syntaxe new.

Démonstration:

```
const Personne = function(name){
    this.name = name
}

typeof(Personne); // "function"
console.log(Personne); 
/* output: 
*   ƒ (name){
*     this.name = name
*   }
*/

console.log(Personne.prototype); 
/* 
* {constructor: ƒ}
*   constructor: ƒ ()
*   __proto__: Objet
*/

let perso1 = new Personne;
typeof(perso1); // "object"

console.log(perso1)
/* output:
*  Personne {name: undefined}
*     name: undefined
*         __proto__:
*             constructor: ƒ (name)
*             __proto__: Object
*/
```
Pour appuyer cette exemple, nous allons parlé d'un des 8 types primitif, le type Objet.
>Traduit de l'anglais-En informatique, le type de données primitif est l'un des suivants: un type de base est un type de données fourni par un langage de programmation en tant que bloc de construction de base. La plupart des langages autorisent la construction récursive de types composites plus complexes à partir de types de base.

Le dernier standard ECMAScript définit 8 types principaux de données :

  Sept types de données primitifs:
    - Booléen
    - Null
    - Undefined
    - Nombre
    - BigInt (proposition pour ES2020)
    - Chaîne de caractères (String)
    - Symbole (type introduit avec ECMAScript 6)
  et le type Objet

JavaScript ne permet pas encore comme d'autres langages de définir des classes, et d'instancier ensuite des objets. Mais il est possible de créer directement des objets, grâce au mot-clef Object.

>Un Objet est une structure contenant des données et des instructions en rapport avec ces données. Un Objet correspond parfois à des choses du monde réel, par exemple à une voiture ou à une piste dans un jeu vidéo de course. JavaScript, Java, C++, Python et Ruby sont des exemples de langages de programmation orientée objet.

```
var objet1 = new Object ;

objet1.chaine="Bonjour!" ;
objet1.affiche=function(){
  console.log(this.chaine) ;
}

objet1.affiche() ; // output: "Bonjour!"
```

### Héritage et chaîne de prototype
---
#### Propriété héritées
---
```
let f = function () {
   this.a = 1;
   this.b = 2;
}
let o = new f(); // {a: 1, b: 2}
// on ajoute des propriétés au prototype de la fonction
// f
f.prototype.b = 3;
f.prototype.c = 4;

console.log(o.a); // 1 

console.log(o.b); // 2
// Existe-t-il une propriété 'b' en propre sur o ? Oui, elle vaut 2.
// Le prototype possède également une propriété 'b' mais elle n'est pas
// utilisée.
// C'est ce qu'on appelle l'ombrage (shadowing en anglais)

console.log(o.c); // 4

console.log(o.d) // undefined

```
#### Méthodes héritées (Object.create(o))
---
La méthode Object.create() crée un nouvel objet avec un prototype donné et des propriétés données.

JavaScript ne possède pas de méthodes au sens des langages de classe. En effet, en JavaScript, toute fonction associée à un objet est également une propriété. Une fonction héritée se comportera comme n'importe quelle autre propriété y compris pour l'ombrage (shadowing).

```
var o = {
  a: 2,
  m: function() {
    return this.a + 1;
  }
};
console.log(o.m()); // 3
var p = Object.create(o);

p.a = 4;
console.log(p.m()); // 5

```

#### Utiliser les prototypes avec JavaScript
---

...

Ressources:

- [https://codeburst.io/javascript-essentials-types-data-structures-3ac039f9877b#:~:text=A%20primitive%20(primitive%20value%2C%20primitive,(new%20in%20ECMAScript%202015).](https://codeburst.io/javascript-essentials-types-data-structures-3ac039f9877b#:~:text=A%20primitive%20(primitive%20value%2C%20primitive,(new%20in%20ECMAScript%202015)
- [https://www.gchagnon.fr/cours/dhtml/objets.html](https://www.gchagnon.fr/cours/dhtml/objets.html)
- [https://www.pierre-giraud.com/javascript-apprendre-coder-cours/constructeur-object-prototype-heritage/](https://developer.mozilla.org/fr/docs/Web/JavaScript/H%C3%A9ritage_et_cha%C3%AEne_de_prototypes)
- [https://developer.mozilla.org/fr/docs/Web/JavaScript/H%C3%A9ritage_et_cha%C3%AEne_de_prototypes](https://developer.mozilla.org/fr/docs/Web/JavaScript/H%C3%A9ritage_et_cha%C3%AEne_de_prototypes)
- [https://developer.mozilla.org/fr/docs/Glossaire/Type_coercion#:~:text=La%20type%20coercion%20(en%20fran%C3%A7ais,de%20donn%C3%A9es%20%C3%A0%20un%20autre.](https://developer.mozilla.org/fr/docs/Glossaire/Type_coercion#:~:text=La%20type%20coercion%20(en%20fran%C3%A7ais,de%20donn%C3%A9es%20%C3%A0%20un%20autre.)
- [https://www.pierre-giraud.com/javascript-apprendre-coder-cours/constructeur-object-prototype-heritage/](https://www.pierre-giraud.com/javascript-apprendre-coder-cours/constructeur-object-prototype-heritage/)
