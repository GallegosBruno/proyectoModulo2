import {sumarioValidaciones,campoRequerido, validarMail} from "./helpers.js";

let campoMail = document.getElementById("mail");
let campoAsunto = document.getElementById("asunto");
let campoDescripcion = document.getElementById("descripcion");
let msjFormulario = document.getElementById('msjFormulario')
const formMail = document.getElementById('') 

campoMail.addEventListener("blur", () => {
    console.log("desde mail");
    if (validarMail(campoMail)) {
      campoRequerido(campoMail, 5, 50);
    } else {
      campoMail.className = "form-control is-invalid";
    }
  });
  campoAsunto.addEventListener("blur", () => {
    console.log("desde asunto");
    campoRequerido(campoAsunto, 5, 50);
  });
  campoDescripcion.addEventListener("blur", () => {
    console.log("desde descripcion");
    campoRequerido(campoDescripcion, 10, 1000);
  });

function enviarForm(e){
    e.preventDefault();
    let sumario = sumarioValidaciones(campoMail.value, campoAsunto.value, campoDescripcion.value);
    if(sumario.length=== 0){
        console.log('ENVIANDO FORM')
    }
    else{
        msjFormulario.className = "alert alert-danger mt-3";
        msjFormulario.innerHTML = sumario;
    }
}