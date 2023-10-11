export class Pelicula {
  constructor(
    codigo,
    nombre,
    description,
    srcImage,
    categories,
    released,
    trailerLink
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.poster = srcImage;
    this.description = description;
    this.categories = categories;
    this.released = released;
    this.link = trailerLink;
  }
  get mostrarCodigo() {
    return this.codigo;
  }
  get mostrarNombre() {
    return this.nombre;
  }
  get mostrarDescription() {
    return this.description;
  }
  get mostrarSrcImage() {
    return this.poster;
  }
  get mostrarCategories() {
    return this.categories;
  }
  get mostrarRealeased() {
    return this.released;
  }
  get mostrarLink() {
    return this.link;
  }
  set modificarCodigo(nuevoCodigo) {
    this.codigo = nuevoCodigo;
  }
  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
  set modificarDescription(nuevaDescripcion) {
    this.description = nuevaDescripcion;
  }
  set modificarSrcImage(nuevaSrcImage) {
    this.poster = nuevaSrcImage;
  }
  set modificarCategories(nuevaCategories) {
    this.categories = nuevaCategories;
  }
  set modificarReleased(nuevaReleased) {
    this.released = nuevaReleased;
  }
  set modificarLink(nuevoLink){
    this.link = nuevoLink;
  }
}
