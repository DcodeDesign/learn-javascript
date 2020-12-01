# valeurs primitives

Les types de données
    Le dernier standard ECMAScript définit 8 types de données :
   
        Booléen
        Null
        Undefined
        Nombre
        BigInt (proposition pour ES2020)
        Chaîne de caractères (String)
        Symbole (type introduit avec ECMAScript 6)
       
        Objet

Valeur primitive ou objet

    //On définit une valeur primitive
    let ch1 = 'Une chaine de caractères';
    
    //On appelle le constructeur String() pour créer un objet String
    let ch2 = new String('Une chaine de caractères');
    
    //La propriété length compte la longueur de la chaine
    document.getElementById('p1').innerHTML = ch2.length;
    
    //La métohde toUpperCase() renvoie la chaine en majuscules sans modifier l'objet
    document.getElementById('p2').innerHTML = ch2.toUpperCase();
    
    document.getElementById('p3').innerHTML = ch2;

    //On définit une valeur primitive
    let ch1 = 'Une chaine de caractères';
    
    //On appelle le constructeur String() pour créer un objet String
    let ch2 = new String('Une chaine de caractères');
    
    //La propriété length compte la longueur de la chaine
    document.getElementById('p1').innerHTML = ch2.length;
    
    //La métohde toUpperCase() renvoie la chaine en majuscules sans modifier l'objet
    document.getElementById('p2').innerHTML = ch2.toUpperCase();
    
    document.getElementById('p3').innerHTML = ch2;
