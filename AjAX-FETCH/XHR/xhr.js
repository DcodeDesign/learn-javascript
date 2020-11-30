(function () {
    let httpRequest;
    let idElem;

    window.addEventListener('load', () => {
        idElem = document.getElementById('elem');
        makeRequest(idElem);
    }, false);

    function makeRequest(idElem) {
        httpRequest = new XMLHttpRequest();
        httpRequest.responseType = "json";
        if (!httpRequest) {
            throw('Impossible de créer une instance de XMLHTTP');
        }
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === 4) {   //if complete
                if (httpRequest.status === 200) {  //check if "OK" (200)
                    alertContents(idElem);
                } else {
                    throw(`Il y a eu un problème avec la requête : readyState: ${httpRequest.readyState}, status: ${httpRequest.status}`);
                }
            }
        }

        try {
            // peut déclencher trois types d'exceptions
            httpRequest.open('GET', 'https://labs.dcode.design/wp-json/wp/v2/posts?per_page=50', true);
            httpRequest.send();
        } catch (e) {
            if (e instanceof TypeError) {
                // les instructions pour gérer TypeError
                console.error('TypeError' + e);
            } else if (e instanceof RangeError) {
                // les instructions pour gérer RangeError
                console.error('RangeError' + e);
            } else if (e instanceof EvalError) {
                // les instructions pour gérer EvalError
                console.error('EvalError' + e);
            } else {
                // les instructions pour gérer les autres exceptions
                console.error('Others exceptions' + e);
            }
        }
    }

    function alertContents(idElem) {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let datas = httpRequest.response;
                datas.forEach((elements) => {
                    // crée un nouvel élément div
                    let newDiv = document.createElement("p");
                    // et lui donne un peu de contenu
                    var newContent = document.createTextNode(JSON.stringify(elements.id) + ' ' + JSON.stringify(elements.title.rendered));
                    // ajoute le nœud texte au nouveau div créé
                    newDiv.appendChild(newContent);
                    // ajoute le nouvel élément créé et son contenu dans le DOM
                    idElem.append(newDiv);
                });
            } else {
                throw('Il y a eu un problème avec la requête.');
            }
        }
    }


})();
