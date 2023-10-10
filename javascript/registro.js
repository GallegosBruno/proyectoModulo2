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
    campoRequerido(campoRepetirContraseña, 1, 15);
  });
