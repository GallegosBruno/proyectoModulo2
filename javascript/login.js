import { campoRequerido } from "./helpers.js";
let campoEmail = document.getElementById("email")
let campoConstraseña = document.getElementById("password")


campoEmail.addEventListener("blur", () => {
  console.log("desde blur");
  campoRequerido(campoEmail, 1, 30);
});
campoConstraseña.addEventListener("blur", () => {
  console.log("desde blur");
  campoRequerido(campoConstraseña, 1, 15);
});


const admin = {
  correo: "admin@admin.com",
  password: "12345678",
};

const logIn = (event) => {
  event.preventDefault();

  let correo = campoEmail.value;
  let password = campoConstraseña.value;

  if (correo === admin.correo && password === admin.password) {
      localStorage.setItem("user", JSON.stringify(correo));
      location.replace("./admin.js");// poner bien con la ruta de ADMIN
  } else {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario o contraseña incorrecta',
      footer: '<a href="../pages/recuperacioncuenta.html">Recuperar contraseña</a>'
    })


  }
};

document.getElementById("formulario").addEventListener("submit", logIn);
