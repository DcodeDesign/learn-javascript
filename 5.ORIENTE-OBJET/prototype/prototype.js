// Nom
function Nom(nom) {
    this.nom = nom;
}
Nom.prototype.showNom = function () {
    return this.nom;
}

// Nom & Prenom
function Prenom(prenom) {
    this.prenom = prenom;
}
Prenom.prototype = Object.create(Nom.prototype);
Prenom.prototype.constructor = Nom;
Prenom.prototype.showPrenom = function () {
    return this.prenom
}

// Age
function Age(age) {
    this.age = age;
}
Age.prototype = Object.create(Prenom.prototype);
Age.prototype.constructor = Prenom;
Age.prototype.showAge = function () {
    return this.age
}

// Personne
function Personne() {
    this.showNom(this);
    this.showPersonne(this);
    this.showAge(this);
}
Personne.prototype = Object.create(Age.prototype);
Personne.prototype.constructor = Age;
Personne.prototype.showPersonne = function () {
    return this.age + this.prenom + this.nom;
}

// Instantiation
let nom = new Nom('Jhon');
let prenom = new Prenom('Doe');
let age = new Age('32');
let personne = new Personne();
console.log(nom.showNom());
console.log(prenom.showPrenom());
console.log(age.showAge());
console.log(personne.showPersonne());
