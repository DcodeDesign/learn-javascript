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
