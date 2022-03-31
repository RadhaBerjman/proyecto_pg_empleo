//Seleccionar botones del css para que hagan fetchs

//const cards = document.getElementById("cards"); 


fetch("https://6243ad813da3ac772b053c05.mockapi.io/trabajo")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
  })
