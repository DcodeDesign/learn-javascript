Les balises de script non bloquantes peuvent être placées à peu près n'importe où:

    <script src="script.js" async></script>
    <script src="script.js" defer></script>
    <script src="script.js" async defer></script>
    
* async le script sera exécuté de manière asynchrone dès qu'il sera disponible
* defer le script est exécuté lorsque le document a terminé l'analyse
* async defer le script revient au comportement différé si l'async n'est pas pris en charge

*les scripts asynchrones offrent des avantages:*

- Téléchargement parallèle des ressources : le navigateur peut télécharger des feuilles de style, 
des images et d'autres scripts en parallèle sans attendre le téléchargement et l'exécution d'un script.

- Indépendance de l'ordre d'origine : vous pouvez placer les scripts à l'intérieur de la tête ou du 
corps sans vous soucier du blocage (utile si vous utilisez un CMS). L'ordre d'exécution compte toujours.
