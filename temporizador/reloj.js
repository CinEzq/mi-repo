function mostrarHora () {
let reloj= document.getElementById ("reloj")
let ahora= new Date ();
reloj.innerHTML= ahora.toLocaleTimeString();
}

let cronometro = setInterval (mostrarHora, 1000);