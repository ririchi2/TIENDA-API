var urlApi = "https://webapp-210130211157.azurewebsites.net/webresources/mitienda/";
var requestobj;

fetch("https://webapp-210130211157.azurewebsites.net/webresources/mitienda/")
  .then(response => response.json())
  .then(data => {
      for (var itr = 0; itr<data.length; itr++){
          console.log(data[0]);
          console.log("--------------------------------------------")
          console.log(data[itr].idTienda);
      };
  });