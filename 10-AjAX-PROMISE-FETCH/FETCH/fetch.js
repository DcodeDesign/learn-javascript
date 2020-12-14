/*
fetch("https://labs.dcode.design/wp-json/wp/v2/posts?per_page=1")
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
    .catch(error => console.log("Erreur : " + error));
*/

idElem = document.getElementById('elem');
let promise = fetch("https://labs.dcode.design/wp-json/wp/v2/posts?per_page=50", {
    method: "GET", //ou POST, PUT, DELETE, etc.
    headers: {
        "Content-Type": "text/plain;charset=UTF-8" //pour un corps de type chaine
    },
    body: undefined, //ou string, FormData, Blob, BufferSource, ou URLSearchParams
    referrer: "about:client", //ou "" (pas de réferanr) ou une url de l'origine
    referrerPolicy: "no-referrer-when-downgrade", //ou no-referrer, origin, same-origin...
    mode: "cors", //ou same-origin, no-cors
    credentials: "same-origin", //ou omit, include
    cache: "default", //ou no-store, reload, no-cache, force-cache, ou only-if-cached
    redirect: "follow", //ou manual ou error
    integrity: "", //ou un hash comme "sha256-abcdef1234567890"
    keepalive: false, //ou true pour que la requête survive à la page
    signal: undefined //ou AbortController pour annuler la requête
}).then(response => response.json())
    .then(
        (response) => {
            // console.log(JSON.stringify(response));
            response.forEach((elements) => {
                // crée un nouvel élément div
                let newDiv = document.createElement("p");
                // et lui donne un peu de contenu
                var newContent = document.createTextNode(JSON.stringify(elements.id) + ' ' + JSON.stringify(elements.title.rendered));
                // ajoute le nœud texte au nouveau div créé
                newDiv.appendChild(newContent);
                // ajoute le nouvel élément créé et son contenu dans le DOM
                idElem.append(newDiv);
            });
        }
    )
    .catch(error => console.log("Erreur : " + error));

