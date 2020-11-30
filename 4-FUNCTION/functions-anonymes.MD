# function anonyme

Les fonctions anonymes sont, comme leur nom l’indique, des fonctions qui ne vont pas posséder de nom. 
En effet, lorsqu’on crée une fonction, nous ne sommes pas obligés de lui donner un nom à proprement parler.

Généralement, on utilisera les fonctions anonymes lorsqu’on n’a pas besoin d’appeler notre fonction 
par son nom c’est-à-dire lorsque le code de notre fonction n’est appelé qu’à un endroit dans notre 
script et n’est pas réutilisé.

En d’autres termes, les fonctions anonymes vont très souvent simplement nous permettre de gagner un 
peu de temps dans l’écriture de notre code et (bien que cela porte à débat) à le rendre plus clair 
en ne le polluant pas avec des noms inutiles.

Exemples:
    
       function() {
            alert('test');
       }

Exécuter une fonction anonyme en utilisant une variable:
   
       let alerte = function(){
           alert('Alerte exécutée par une fonction anonyme');
       };
       
       alert();

Auto-invoquer une fonction anonyme:
        
       //Fonction anonyme auto-invoquée
       (function(){alert('Alerte exécutée par une fonction anonyme')})();
       
       //Fonction nommée auto-invoquée
       (function bonjour(){alert('Bonjour !')})();
        
        
Exécuter une fonction anonyme lors du déclenchement d’un évènement:
        
        //Représentent nos paragraphes p id='p1' et p id='p2'
        let para1 = document.getElementById('p1');
        let para2 = document.getElementById('p2');
        
        /*On utilise la fonction addEventListener() qui sert de gestionnaire
         *d'évènement. Ici, on demande à exécuter la fonction anonyme passé en
         *deuxième argument lors de l'évènement "click" (clic) que l'élément
         *p id='p1' ou p id='p2'*/
         
        para1.addEventListener('click', function(){
                alert('Clic sur p id=p1');
            }
        );
        
        para2.addEventListener('click', function(){
                alert('Clic sur p id=p2');
            }
        );
        
Les fonctions récursives:
    
    function decompte(t) {
        if (t > 0) {
            document.getElementById('p1').innerHTML += t + '<br>';
            return decompte(t - 1);
        }else{
            return t;
        }
    };
    
    decompte(7);
