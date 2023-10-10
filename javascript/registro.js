import { campoRequerido, validarMail} from "./helpers.js";

let campoNombre = document.getElementById("name")
let campoApellido= document.getElementById("lastname")
let campoCorreoElectronico = document.getElementById("exampleInputEmail")
let campoContraseña= document.getElementById("password")
let campoRepetirContraseña= document.getElementById("repeatPassword")

campoNombre.addEventListener("blur", () => {
    campoRequerido(campoNombre, 1, 15);
  });

  campoApellido.addEventListener("blur", () => {
    campoRequerido(campoApellido, 1, 15);
  });
  
  campoCorreoElectronico.addEventListener("blur", () => {
    console.log("desde blur");
    validarMail(campoCorreoElectronico)});
  

  campoContraseña.addEventListener("blur", () => {
    campoRequerido(campoContraseña, 1, 15);
  });
  campoRepetirContraseña.addEventListener("blur", () => {
    repetirContraseña();
  });
 

function repetirContraseña() {
    const contraseña = campoContraseña.value;
    const repetirContraseñaValor = campoRepetirContraseña.value;
  
    if (contraseña === repetirContraseñaValor) {
      campoRepetirContraseña.className = "form-control is-valid";
      return true;
    } else {
      campoRepetirContraseña.className = "form-control is-invalid";
      return false;
    }
  }

