var urlApi = "https://webapp-210130211157.azurewebsites.net/webresources/mitienda/";
var requestobj;

//METODOS
function createNode(nodeName, nodeText, nodeClasses, nodeAttributes) {
    var node = document.createElement(nodeName);

    if(nodeText!="") {
        var textNode = document.createTextNode(nodeText);
        node.appendChild(textNode);
    }

    if(nodeClasses.length > 0) {
        nodeClasses.forEach(nodeClass => node.classList.add(nodeClass));
    }

    if(nodeAttributes.length > 0) {
        nodeAttributes.forEach(nodeAttribute => node.setAttribute(nodeAttribute.name, nodeAttribute.value));
    }

    return node;
}
function removeChilds(node) {
    var childs = Array.from(node.childNodes);

    childs.forEach(child => child.remove());
}

fetch("https://webapp-210130211157.azurewebsites.net/webresources/mitienda/")
  .then(response => response.json())
  .then(data => {
      data.forEach(data => {
          console.log(data.idTienda)
      })
    //   for (var itr = 0; itr<data.length; itr++){
    //       console.log(data[0]);
    //       console.log("--------------------------------------------")
    //       console.log(data[itr].idTienda);
    //   };
  });