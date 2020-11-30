# Browser Object Model et interface Window
Une API (Application Programming Interface ou Interface de Programmation Applicative en français) 
est une interface, c’est-à-dire un ensemble de codes grâce à laquelle un logiciel fournit des services 
à des clients.

Le principe et l’intérêt principal d’une API est de permettre à des personnes externes de pouvoir réaliser 
des opérations complexes et cachant justement cette complexité.

En effet, le développeur n’aura pas besoin de connaître les détails de la logique interne du logiciel 
tiers et n’y aura d’ailleurs pas accès directement puisqu’il devra justement passer par l’API qui va 
nous fournir en JavaScript un ensemble d’objets et donc de propriétés et de méthodes prêtes à l’emploi 
et nous permettant de réaliser des opérations complexes.

Le BOM est une sorte de « super API » elle-même composée de plusieurs API dont certaines sont 
elles mêmes composées de plusieurs API et etc.

A la base du BOM, nous avons l’interface Window qui représente une fenêtre de navigateur 
contenant une page ou un document.

L’objet Window implémente l’interface Window. Cet objet est supporté par tous les navigateurs 
et tous les objets globaux, variables globales et fonctions globales appartiennent automatiquement 
à cet objet (c’est-à-dire sont des enfants de cet objet).

Dans un navigateur utilisant des onglets, comme Firefox, chaque onglet contient son propre objet Window.

Cet objet Window est un objet dit « implicite » : nous n’aurons généralement pas besoin de le 
mentionner de manière explicite pour utiliser les méthodes (ou fonctions globales) et propriétés 
(ou variables globales) lui appartenant.

Le BOM est composé de différentes interfaces qu’on va pouvoir utiliser via des objets. Dans 
la suite de cette partie, nous ne parlerons plus que d’ « objets » par simplicité même si ce 
terme ne sera pas toujours strictement exact.

Les objets suivants appartiennent au BOM et sont tous des enfants de Window :

    L’objet Navigator qui représente l’état et l’identité du navigateur et qu’on va utiliser avec l’API Geolocation ;
    
    L’objet History qui permet de manipuler l’historique de navigation du navigateur
    
    L’objet Location qui fournit des informations relatives à l’URL de la page courante ;
    
    L’objet Screen qui nous permet d’examiner les propriétés de l’écran qui affiche la fenêtre courante ;
    
    L’objet Document et le DOM dans son ensemble que nous étudierons en détail dans la suite.
