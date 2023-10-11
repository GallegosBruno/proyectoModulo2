import { Pelicula } from "./clasePelicula.js";

//Traigo los elementos html que necesito
let campoCodigo = document.getElementById("codigo")
console.log(campoCodigo)
let campoNombre = document.getElementById("pelicula")
console.log(campoNombre)
let campoDescription = document.getElementById("description")
console.log(campoDescription)
let campoSrcImage = document.getElementById("srcImage")
console.log(campoSrcImage)
let campoCategories = document.getElementById("categories")
console.log(campoCategories)
let campoReleased = document.getElementById("released")
console.log(campoReleased)
let campoTrailerLink = document.getElementById("trailerLink")
console.log(campoTrailerLink)
let formProductos = document.getElementById("formProductos")


let listaPeliculas =JSON.parse(localStorage.getItem("arrayPeliculas")) || [];

function crearCodigoUnico() {
    let codigoUnico = Date.now().toString();
    return codigoUnico;
  }

function crearPelicula(){
    let codigoUnico = crearCodigoUnico()
    let peliculaNueva = new Pelicula(codigoUnico, campoNombre.value, campoDescription.value, campoSrcImage.value, campoCategories.value, campoReleased.value, campoTrailerLink.value)
listaPeliculas.push(peliculaNueva)
crearFila(peliculaNueva)


}

function guardarPelicula(e){
    //para evitar recargar la pagina
    e.preventDefault();
    crearPelicula()
    guardarPeliLocalStorage()
    Swal.fire("Producto Creado!", "Su producto fue creado con exito", "success");

}
formProductos.addEventListener("submit", guardarPelicula);

function guardarPeliLocalStorage() {
  localStorage.setItem("arrayPeliculas", JSON.stringify(listaPeliculas));
}
console.log(listaPeliculas)

function crearFila(pelicula) {
  let tablaProductos = document.getElementById("tablaProductos");
  // Using the addition assignment operator to concatenate a new row to the table's content
  tablaProductos.innerHTML += `
    <tr>
      <td scope="col">${pelicula.codigo} </td>
      <td scope="col">${pelicula.nombre} </td>
      <td scope="col">${pelicula.description} </td>
      <td scope="col">${pelicula.srcImage} </td>
      <td scope="col">${pelicula.categories} </td>
      <td scope="col">${pelicula.trailerLink} </td>

      <td>
      <button class="btn btn-warning mb-3" onclick="prepararEdicionProducto('${pelicula.codigo}')"> Edicion</button>

      </td>
      <td>

        <button class="btn btn-danger mb-3" onclick="borrarProducto('${pelicula.codigo}')"> Eliminar</button>
      </td>
    </tr>
  `;
}

