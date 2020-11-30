# Prototype

Avant tout, je tiens à vous rappeler que les fonctions en JavaScript sont avant tout des objets. 
Lorsqu’on créé une fonction, le JavaScript va automatiquement lui ajouter une propriété prototype 
qui ne va être utile que lorsque la fonction est utilisée comme constructeur, c’est-à-dire lorsqu’on 
l’utilise avec la syntaxe new.

Cette propriété prototype possède une valeur qui est elle-même un objet. On parlera donc de 
« prototype objet » ou « d’objet prototype » pour parler de la propriété prototype.

Par défaut, la propriété prototype d’un constructeur ne contient que deux propriétés : 
une propriété constructor qui renvoie vers le constructeur contenant le prototype et 
une propriété __proto__ qui contient elle-même de nombreuses propriétés et méthodes.

# La chaine des prototypes ou chaine de prototypage et l’objet Object
Comment un objet peut-il accéder à une propriété ou à une 
méthode définie dans un autre objet ?

Pour répondre à cette question, il faut savoir 
que lorsqu’on essaie d’accéder à un membre d’un objet, 
le navigateur (qui exécute le JavaScript) va d’abord 
chercher ce membre au sein de l’objet.

S’il n’est pas trouvé, alors le membre va être cherché 
au sein de la propriété __proto__ de l’objet dont le contenu est, 
rappelons-le, égal à celui de la propriété prototype du constructeur 
qui a servi à créer l’objet.

Si le membre est trouvé dans la propriété __proto__ de l’objet 
(c’est-à-dire s’il a été défini dans la propriété prototype du constructeur), 
alors il est utilisé. Si ce n’est pas le cas, alors on va aller chercher dans 
la propriété __proto__ dont dispose également le constructeur et qui va être 
égale au prototype du constructeur du constructeur.

On dit alors qu’on « remonte la chaine des prototypes ». A ce niveau, il faut 
savoir que tous les objets en JavaScript descendent par défaut d’un objet de 
base qui s’appelle Object.

Cet objet est l’un des objets JavaScript prédéfinis et permet notamment de créer 
des objets génériques vides grâce à la syntaxe new Object().

L’objet ou le constructeur Object() va être le parent de tout objet en JavaScript 
(sauf certains objets particuliers créés intentionnellement pour ne pas dépendre d’Object) 
et également posséder une propriété prototype.

Ainsi, lorsqu’on essaie d’accéder à un membre d’un objet, le membre en question 
sera d’abord cherché dans l’objet puis dans sa propriété __proto__ s’il n’est pas 
trouvé dans l’objet puis dans la propriété __proto__ de son constructeur et etc. 
jusqu’à remonter au constructeur Object().

Si finalement le membre demandé n’est pas trouvé dans le constructeur Object(), 
alors il sera considéré comme non présent.

Comprendre cela va nous permettre de créer des hiérarchies d’objets et notamment de 
mettre en place un héritage en orienté objet JavaScript.

 > https://www.pierre-giraud.com/javascript-apprendre-coder-cours/constructeur-object-prototype-heritage/
