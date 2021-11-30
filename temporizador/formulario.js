function validarFormulario () {
    let nombre= document.getElementById ('nombre').value;
    let edad= document.getElementById ('edad').value; 
    let correo = document.getElementById ('correo').value;
    let fecha= document.getElementById ('fecha').value;
    let selector= document.getElementById ('selector').selectedIndex;
    let checkbox= document.getElementById ('checkBox');
    let radioBtn= document.getElementById ('radioButton');
    let boleana= false;
  // test campo obligatorio---//  
    if (nombre== null || nombre.length ==0) {
alert ('Error: el nombre esta vacio'); return false;
    }

 // test edad---//   
if (edad== null|| edad.length ==0 || isNaN(edad)) {
    alert ('Error: debe ingresar la edad '); return false;
    }

  // test correo----//  
if ((!(/\S+@\S+\.\S+/. test (correo)))){
        alert ('Error: verifique el correo electronico'); return false;
    }


 // test fecha---//
 if (!isNaN(fecha)) {
    alert ('Error: debe ingresar la fecha'); return false;
    }

 // test comboBox---//   
if (selector == " ") {
    alert ('Error: debe seleccionar una opcion'); return false;
        }
 //test checkbox---//
 if (!checkbox.checked )  {
     alert ('Error: debe seleccionar el checkbox'); return false;
    } 
 //test radio buttons---//
 for (var i=0; i<radioBtn.length; i++) {
     if (radioBtn[i].checked) { 
     boleana=true;
     break;
     }
    }

   if (!boleana) {
alert ('Error debe elegir una opcion de radio button'); return false;
}   
return true;
}