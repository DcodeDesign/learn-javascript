# classes

    class Ligne{
        /* constructeur */
        constructor(nom, longueur){
            this.nom = nom;
            this.longueur = longueur;
        }
        
        /* methode*/
        taille(){document.getElementById('p1').innerHTML +=
            'Longueur de  ' + this.nom + ' : ' + this.longueur + '<br>'};
    }
    
    let geo1 = new Ligne('geo1', 10);
    let geo2 = new Ligne('geo2', 5);
    geo1.taille();
    geo2.taille();

## heritage

    class Ligne{
        constructor(nom, longueur){
            this.nom = nom;
            this.longueur = longueur;
        }
        
        taille(){document.getElementById('p1').innerHTML +=
            'Longueur de  ' + this.nom + ' : ' + this.longueur + '<br>'};
    }
    
    let geo1 = new Ligne('geo1', 10);
    let geo2 = new Ligne('geo2', 5);
    geo1.taille();
    geo2.taille();
    
    class Rectangle extends Ligne{
        constructor(nom, longueur, largeur){
            super(nom, longueur); //Appelle le constructeur parent
            this.largeur = largeur;
        }
        
        aire(){document.getElementById('p2').innerHTML +=
        'Aire de ' + this.nom + ' : ' + this.longueur * this.largeur + '<br>'};
    }
    
    let geo3 = new Rectangle('geo3', 7, 5);
    geo3.aire();
    geo3.taille();
