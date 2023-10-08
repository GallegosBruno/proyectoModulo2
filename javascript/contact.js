import {sumarioValidaciones} from "./helpers.js";
import {campoRequerido } from "./helpers.js";
import {validarMail} from "./helpers.js";

let campoMail = document.getElementById("mail");
let campoAsunto = document.getElementById("asunto");
let campoDescripcion = document.getElementById("descripcion");
let msjFormulario = document.getElementById('msjFormulario');
const formMail = document.getElementById('formMail');
let campoNombre = document.getElementById('nombre');

formMail.addEventListener('submit',enviarForm);

function enviarForm(e) {
  e.preventDefault();
  let sumario = sumarioValidaciones(campoMail, campoAsunto, campoDescripcion);
  if (sumario.length === 0) {
      limpiarForm();
      msjFormulario.className = 'alert alert-danger mt-3 d-none';
      formMail.submit();
  } else {
      msjFormulario.className = 'alert alert-danger mt-3';
      msjFormulario.innerHTML = sumario;
  }
}

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

campoNombre.addEventListener("blur", () => {
  console.log("nombre");
  campoRequerido(campoNombre, 3, 50);
});

function limpiarForm() {
  formMail.reset();
}import {sumarioValidaciones} from "./helpers.js";
import {campoRequerido } from "./helpers.js";
import {validarMail} from "./helpers.js";

let campoMail = document.getElementById("mail");
let campoAsunto = document.getElementById("asunto");
let campoDescripcion = document.getElementById("descripcion");
let msjFormulario = document.getElementById('msjFormulario');
const formMail = document.getElementById('formMail');

formMail.addEventListener('submit',enviarForm);

function enviarForm(e) {
  e.preventDefault();
  let sumario = sumarioValidaciones(campoMail, campoAsunto, campoDescripcion);
  if (sumario.length === 0) {
      limpiarForm();
      msjFormulario.className = 'alert alert-danger mt-3 d-none';
      formMail.submit();
  } else {
      msjFormulario.className = 'alert alert-danger mt-3';
      msjFormulario.innerHTML = sumario;
  }
}

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

function limpiarForm() {
  formMail.reset();
}