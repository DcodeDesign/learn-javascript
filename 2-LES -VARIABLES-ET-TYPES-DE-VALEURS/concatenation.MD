#La concaténation

Concaténer signifie littéralement « mettre bout à bout ». 
La concaténation est un mot généralement utilisé pour désigner 
le fait de rassembler deux chaines de caractères pour en 
former une nouvelle.

Exemple : 

    alert('x contient ' + x +
          '\ny contient ' + y +
          '\nLeur somme vaut ' + (x + y));
          
## Les littéraux de gabarits
La grande différence entre l’utilisation d’accents graves ou l’utilisation 
d’apostrophes ou de guillemets est que toute expression placée entre les 
accents graves va être interprétée en JavaScript. Pour le dire simplement : 
tout ce qui renvoie une valeur va être remplacé par sa valeur.

Cela signifie notamment qu’on va pouvoir placer du texte et des variables 
ensemble sans avoir besoin d’utiliser d’opérateur de concaténation puisque 
les variables vont être interprétées, c’est-à-dire remplacées par leur valeur.

Exemple : alert(`x contient ${x}
                y contient ${y}
                Leur somme vaut ${x + y}`);
    
       
