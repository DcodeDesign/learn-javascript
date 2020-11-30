# 

Vous pouvez noter que j’ai dans ma troisième condition 
utilisé un deuxième couple de parenthèses pour être sûr 
que l’opérateur ! porte bien sur le résultat de la comparaison 
x <= 2 et non pas seulement sur x, ce qui produirait 
un résultat différent.

Pour comprendre cela, il faut savoir que les différents 
opérateurs de chaque type ont une priorité de traitement 
différente. Cela signifie que le JavaScript va d’abord 
traiter tel opérateur, puis tel autre et etc.

Comme vous pouvez vous en douter, cela rend les choses 
très vite complexes puisqu’il existe de nombreux opérateurs 
et qu’il va falloir connaitre leur ordre relatif de traitement 
pour être certain d’obtenir un résultat conforme à nos 
attentes au final.

Cet ordre de priorité est appelé « précédence ». 
En plus de cela, vous devez également savoir que les 
opérateurs vont avoir différents sens d’associativité.

L’associativité détermine l’ordre dans lequel des opérateurs 
de même précédence sont évalués et va pouvoir se faire par 
la droite ou par la gauche. Une associativité par la gauche 
signifie qu’on va commencer réaliser les opérations en partant 
de la gauche et vers la droite tandis qu’une associativité par 
la droite signifie qu’on va commencer par la droite.

    Précédence	    Opérateur (nom)                 Opérateur (symbole)	    Associativité
    0	            Groupement	                    ( … )	                Non applicable
    1	            Post-incrémentation	            … ++	                Non applicable
    1	            Post-décrémentation	            … —	                    Non applicable
    2	            NON (logique)	                ! …	                    Droite
    2	            Pré-incrémentation	            ++ …	                Droite
    2	            Pré-décrémentation	            — …	                    Droite
    3	            Exponentiel	                    … ** …	                Droite
    3	            Multiplication	                … * …	                Gauche
    3	            Division	                    … / …	                Gauche
    3	            Modulo	                        … % …	                Gauche
    4	            Addition	                    … + …	                Gauche
    4	            Soustraction	                … – …	                Gauche
    5	            Inférieur strict	            … < …	                Gauche
    5	            Inférieur ou égal	            … <= …	                Gauche
    5	            Supérieur strict	            … > …	                Gauche
    5	            Supérieur ou égal	            … >= …	                Gauche
    6	            Égalité (en valeur)     	    … == …	                Gauche
    6	            Inégalité (en valeur)	        … != …	                Gauche
    6	            Egalité (valeur et type)	    … === …	                Gauche
    6	            Inégalité (valeur ou type)	    … !== …	                Gauche
    7	            ET (logique)	                &&	                    Gauche
    8	            OU (logique)	                ||	                    Gauche
    9	            Ternaire	                    … ? … : …	            Droite
    10	            Affectation (simple/combiné)	… = … , … += … , … -= … , etc.	Droite
