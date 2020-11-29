# La fonction construction d’objets
Une fonction constructeur d’objets est une 
fonction qui va nous permettre de créer des 
objets semblables. En JavaScript, n’importe 
quelle fonction va pouvoir faire office de 
constructeur d’objets.

# Constructeur et différenciation des objets
On pourrait à première vue penser qu’il est contraignant d’utiliser un constructeur 
puisque cela nous « force » à créer des objets avec une structure identique et donc 
n’offre pas une grande flexibilité.

En réalité, ce n’est pas du tout le cas en JavaScript puisqu’on va pouvoir, 
une fois un objet créé et à n’importe quel moment de sa vie, modifier les valeurs 
de ses propriétés et ses méthodes ou lui en attribuer de nouvelles.

La fonction constructeur doit vraiment être vue en JavaScript comme un plan de base 
pour la création d’objets similaires et comme un moyen de gagner du temps et de la 
clarté dans son code. On ne va définir dans cette fonction que les caractéristiques 
communes de nos objets et on pourra ensuite rajouter à la main les propriétés 
particulières à un objet.
