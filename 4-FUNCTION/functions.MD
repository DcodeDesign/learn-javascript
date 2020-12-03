# function
Les fonctions sont des blocs de code nommés et réutilisables 
et dont le but est d’effectuer une tâche précise ;

Il existe deux grands types de fonctions en JavaScript : 
les fonction natives ou prédéfinies (qui sont en fait des méthodes) 
qu’on n’aura qu’à appeler et les fonctions personnalisées 
qu’on va pouvoir créer ;

Pour exécuter le code d’une fonction, il faut l’appeler. 
Pour cela, il suffit d’écrire son nom suivi d’un couple 
de parenthèses en passant éventuellement des arguments 
dans les parenthèses ;

On crée une fonction personnalisée grâce au mot clef function ;

Si une fonction a besoin qu’on lui passe des valeurs pour 
fonctionner, alors on définira des paramètres lors de sa 
définition. Lors de son appel, on lui passera des arguments 
qui prendront la place des arguments.
    
    function aleatoire(elem){
       // code
       return elem;
    }

Les différences de portée entre les variables var et let en JavaScript:

    function portee1(){
        let x = 1;
        var y = 2;
        if(true){
            let x = 5; //Variable différente
            var y = 10; //Même variable qu'au dessus 
            document.getElementById('p1').innerHTML = 'x (dans if) = ' + x; // x (dans if) = 5
            document.getElementById('p2').innerHTML = 'y (dans if) = ' + y; // y (dans if) = 10
        }
        document.getElementById('p3').innerHTML = 'x (hors if) = ' + x; // x (hors if) = 1
        document.getElementById('p4').innerHTML = 'y (hors if) = ' + y; // y (hors if) = 10
    }

Attention :

as de this lié à la fonction
Jusqu’a l’apparition des fonctions fléchées, chaque nouvelle fonction définissait son propre this :

un nouvel objet dans le cas d’un constructeur
undefined dans les appels de fonctions en mode strict
l’objet courant si la fonction est appelée comme une méthode, etc.
Cela a pu entraîner des confusions lorsqu’on utilisait un style de 
programmation orientée objet.
    
    function Personne () {
      // Le constructeur Personne() définit `this` comme lui-même.
      this.age = 0;
    
      setInterval(function grandir () {
        // En mode non strict, la fonction grandir() définit `this` 
        // comme l'objet global et pas comme le `this` defini 
        // par le constructeur Personne().
        this.age++;
      }, 1000);
    }
    
    var p = new Personne();

Avec ECMAScript 3/5, ce problème a pu être résolu en affectant la valeur 
de this à une autre variable :

    function Personne () {
      var that = this; 
      that.age = 0;
    
      setInterval(function grandir () {
        // La fonction callback se réfère à la variable `that`
        // qui est le contexte souhaité
        that.age++;
      }, 1000);
    }

Autrement, on aurait pu utiliser une fonction de liaison afin que la bonne 
valeur this soit passée à la fonction grandir.

Les fonctions fléchées ne créent pas de nouveau contexte, elles utilisent 
la valeur this de leur contexte. Aussi, si le mot-clé this est utilisé dans 
le corps de la fonction, le moteur recherchera la référence à cette valeur 
dans une portée parente. Le code qui suit fonctionne ainsi de la façon attendue 
car le this utilisé dans setInterval est le thisde la portée de Personne :
    
    function Personne () {
      this.age = 0;
    
      setInterval(() => {
        this.age++; 
        // |this| fait bien référence à l'objet personne
      }, 1000);
    }
    
    var p = new Personne();
