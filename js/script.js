var urlApi = "https://webapp-210130211157.azurewebsites.net/webresources/mitienda/";

fetch("https://webapp-210130211157.azurewebsites.net/webresources/mitienda/")
  .then(response => response.json())
  .then(data => console.log(data));