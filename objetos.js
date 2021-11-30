// //OBJETOS----//

// //CREAMOS EL OBJETO//

// let persona = {
// nombre: "Hermione",
// apellido: "Granger",
// edad: 12,
// amigos: ['harry', 'ron','ginny']

// }

// console.log (persona)

// //ACCEDEMOS ----//
// let nombrePersona= persona.nombre
//  console.log (nombrePersona)

//  let amigos= persona.amigos[0]
//   console.log (amigos)

//   //MODIFICAR UN OBJETO//
//    persona.edad = persona.edad + 1;

// // modificar agregando un item al array---//
//    persona.amigos.push ('Neville')
   

//  console.log (persona.amigos[3])
//  //se puede agregar info al objeto---//
//  persona.ocupacion = "Ministra de Magia";
//   console.log (persona.ocupacion)
 
//  console.log (persona)

//CONSIGNA..CREAR OBJETO Y AGREGARLE ATRIBUTO CON UN ARRAY----//

// let persona2= {
// nombre: "Maria",
// apellido: "Laloca",
// edad: 20,
// mascota: true,
// serieFavorita: "Game of Thrones",


// }
// console.log (persona2);


// persona2.comidasFavoritas= {comidasFavoritas: ["panchos","hamburguesas","pizzas"]
// }
//   console.log (persona2.comidasFavoritas);

// persona2.comidasFavoritas.comidasFavoritas.push ('Milanesas');

//  console.log (persona2)
  
 // CREACION DE ELEMENTOS---//
  // let parrafo = document.createElement ("p");
  // parrafo.innerHTML= "<h2> Hola Anto! Pare de sufrir <h2>";
  // document.body.appendChild (parrafo);
 //
 //----ELIMINAR ELEMENTOS ----//
  // let parrafo = document.getElementById (parrafo);
  // parrafo.parentNode.removeChild(parrafo);



  //--- ASINCRONIA setInterval ()---
// setInterval (function() {alert ("Hola Manuel")}, 3000);
// setInterval (function() {alert ("ESCUDO NO MORE")}, 3000);

setInterval [saludar, 5000];
function saludar () {
alert ("saludos")

};
