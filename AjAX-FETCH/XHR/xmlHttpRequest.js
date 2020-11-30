//On crée un objet XMLHttpRequest
let xhr;
let i= 0;


/*
* TEST 1
*/
// ancien code de compatibilité, aujourd’hui inutile
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+...
    console.log(`window.XMLHttpRequest : ${window.XMLHttpRequest}`);
    xhr = new XMLHttpRequest();
}
else if (window.ActiveXObject) { // IE 6 et antérieurs
    console.log(`window.ActiveXObject : ${window.ActiveXObject}`);
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

console.log('UNSENT', xhr.readyState); // readyState will be 0

xhr.open('GET', 'https://labs.dcode.design/wp-json/wp/v2/posts?per_page=1', true);
console.log('OPENED', xhr.readyState); // readyState will be 1

xhr.onprogress = function () {
    i++;
    console.log('LOADING', xhr.readyState); // readyState will be 3
};

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            console.log(' parfait ! ', xhr.status);
            console.log(i);
            console.log('tout va bien, la réponse a été reçue ', xhr.readyState);
        } else {
            // il y a eu un problème avec la requête,
            // par exemple la réponse peut être un code 404 (Non trouvée)
            // ou 500 (Erreur interne au serveur)
            console.log('il y a eu un problème avec la requête ', xhr.status);
        }

    } else {
        console.log('pas encore prête ', xhr.readyState);
    }
}

xhr.onload = function () {
    console.log('DONE', xhr.readyState); // readyState will be 4
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            console.log(' parfait ! ', xhr.status);
            console.log(i);
            console.log('tout va bien, la réponse a été reçue ', xhr.readyState);
        } else {
            // il y a eu un problème avec la requête,
            // par exemple la réponse peut être un code 404 (Non trouvée)
            // ou 500 (Erreur interne au serveur)
            console.log('il y a eu un problème avec la requête ', xhr.status);
        }
    } else {
        console.log('pas encore prête ', xhr.readyState);
    }
};

xhr.send(null);


/*
* TEST 2
*/
// readystatechangeévénement se déclenche chaque fois que le readyState change
/*xhr.onreadystatechange = function() {
    console.log("onreadystatechange");
    //Si le statut HTTP n'est pas 200...
    if (xhr.status !== 200){
        //...On affiche le statut et le message correspondant
        console.log("Erreur " + xhr.status + " : " + xhr.statusText);
        //Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
    }else{
        // console.log(xhr.getAllResponseHeaders() + xhr.response.length + " octets  téléchargés\n" +  JSON.stringify(xhr.response));
        //return JSON.stringify(xhr.response)
        console.log("Succes " + xhr.status);
    }
};


//On initialise notre requête avec open()
xhr.open("GET", "https://labs.dcode.design/wp-json/wp/v2/posts?per_page=1");
//On veut une réponse au format JSON
xhr.responseType = "json";
//On envoie la requête
xhr.send();

//Dès que la réponse est reçue...
xhr.onload = function(){
    console.log("xhr.onload");
    //Si le statut HTTP n'est pas 200...
    if (xhr.status !== 200){
        //...On affiche le statut et le message correspondant
        console.log("Erreur " + xhr.status + " : " + xhr.statusText);
    //Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
    }else{
        // console.log(xhr.getAllResponseHeaders() + xhr.response.length + " octets  téléchargés\n" +  JSON.stringify(xhr.response));
        return JSON.stringify(xhr.response)
    }
};

//Si la requête n'a pas pu aboutir...
xhr.onerror = function(){
   console.log("La requête a échoué");
};

//Pendant le téléchargement...
xhr.onprogress = function(event){
    //lengthComputable = booléen; true si la requête a une length calculable
    if (event.lengthComputable){
        //loaded = contient le nombre d'octets téléchargés
        //total = contient le nombre total d'octets à télécharger
       console.log(event.loaded + " octets reçus sur un total de " + event.total);
    }
};*/

/*
* Exemple
*/
/*
<button id="ajaxButton" type="button">Faire une requête</button>
(function() {
    var httpRequest;
    document.getElementById("ajaxButton").addEventListener('click', makeRequest);

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert('Abandon :( Impossible de créer une instance de XMLHTTP');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', 'test.html');
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                alert(httpRequest.responseText);
            } else {
                alert('Il y a eu un problème avec la requête.');
            }
        }
    }
})();
*/



