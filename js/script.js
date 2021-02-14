// var urlApi = "https://webapp-210130211157.azurewebsites.net/webresources/mitienda/";

// Containers
const mainContainer = document.getElementsByTagName("main")[0];
const indexContainer = document.getElementsByClassName("index")[0];
const loadingContainer = document.getElementsByClassName("loading")[0];
const resultContainer = document.getElementsByClassName("result")[0];

// Opciones de la peticion
var myHeaders = new Headers();
var options = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

const btnFetch = document.getElementById("btnFetch");

btnFetch.addEventListener("click", () => {
    indexContainer.style.display = "none";
    loadingContainer.style.display = "";
    fetch("https://webapp-210130211157.azurewebsites.net/webresources/mitienda/", options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log("Respuesta de red OK pero respuesta HTTP no OK");
                indexContainer.style.display = "";
                loadingContainer.style.display = "none";
            }
        })
        .then(data => {
            data.forEach(data => {
                loadingContainer.style.display = "none";
                resultContainer.style.display = "";
                //   console.log(data.idTienda);

                var cardContainer = createNode("div", "", ["card"], []);
                resultContainer.appendChild(cardContainer);
                var h2Card = createNode("h2", data.nombreTienda, [], []);
                cardContainer.appendChild(h2Card);
                cardContainer.appendChild(createNode("p", `${data.direccion} (${data.localidad})`, [], []));
                cardContainer.appendChild(createNode("p", data.telefono, [], []));
            });
        })
        .catch(function (error) {
            console.log("Hubo un problema con la peticion Fetch: " + error.message);
            indexContainer.style.display = "";
            loadingContainer.style.display = "none";
        })

});


// METODOS
function createNode(nodeName, nodeText, nodeClasses, nodeAttributes) {
    var node = document.createElement(nodeName);

    if (nodeText != "") {
        var textNode = document.createTextNode(nodeText);
        node.appendChild(textNode);
    }

    if (nodeClasses.length > 0) {
        nodeClasses.forEach(nodeClass => node.classList.add(nodeClass));
    }

    if (nodeAttributes.length > 0) {
        nodeAttributes.forEach(nodeAttribute => node.setAttribute(nodeAttribute.name, nodeAttribute.value));
    }

    return node;
}

function removeChilds(node) {
    var childs = Array.from(node.childNodes);

    childs.forEach(child => child.remove());
}