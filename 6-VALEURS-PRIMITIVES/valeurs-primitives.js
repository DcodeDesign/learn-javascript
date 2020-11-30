function User(nom, age, mail){
    this.nom = nom;
    this.age = age;
    this.mail = mail;
    this.bonjour = function(idElem) {
        document.getElementById(idElem).innerText = 'nom: ' + this.nom + ' age: ' + this.age + ' mail: ' + this.mail;
    }
}

let user = new User('Jhon', 32, 'jhon@gmail.com')
user.bonjour('p1');
