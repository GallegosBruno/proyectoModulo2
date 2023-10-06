class Pelicula {
    constructor(
        codigo,
        nombre,
        description,
        srcImage,
        categories,
        released,
        trailerLink)
    {
        this.codigo = codigo;
        this.nombre = nombre;
        this.poster = srcImage;
        this.description = description;
        this.categories = categories;
        this.released = released;
        this.link = trailerLink;
    }
}

const peliculas = [
    new Pelicula(1, "Movie 1", "Description 1", "image1.jpg", ["category 1", "category 2"], true, "trailer1"),
    new Pelicula(2, "Movie 2", "Description 2", "image2.jpg", ["category 2", "category 3"], false, "trailer2"),
    new Pelicula(3, "Movie 3", "Description 3", "image3.jpg", ["category 1", "category 3"], true, "trailer3"),
    new Pelicula(4, "Movie 4", "Description 4", "image4.jpg", ["category 2"], false, "trailer4"),
    new Pelicula(5, "Batman", "Description 5", "image5.jpg", ["category 3"], true, "trailer5"),
    new Pelicula(6, "Movie 6", "Description 6", "image6.jpg", ["category 1"], false, "trailer6"),
    new Pelicula(7, "Movie 7", "Description 7", "image7.jpg", ["category 2", "category 3"], true, "trailer7"),
    new Pelicula(8, "Movie 8", "Description 8", "image8.jpg", ["category 1", "category 2"], false, "trailer8"),
    new Pelicula(9, "Movie 9", "Description 9", "image9.jpg", ["category 3"], true, "trailer9"),
    new Pelicula(10, "Movie 10", "Description 10", "image10.jpg", ["category 1", "category 2", "category 3"], false, "trailer10"),
];

let peliculaDestacada = new Pelicula(12356,"Transformes","Em la nuva de transforme todo muere pibe","./assets/Posters de peliculas/pel5.jpg","Accion aventura",true,"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
);

/*Funciones de pagina principal*/
/*AÑADIR AL ARCHIVO DE JAVA COMUN Y BORRAR LO DE ARRIBA*/
const setBanner = () => {
    document.getElementById("mainBannerImg").src = peliculaDestacada.poster;
    document.getElementById("tituloBanner").innerText = peliculaDestacada.nombre;
    document.getElementById("descripcionBanner").innerText = peliculaDestacada.description;
    document.getElementById("trailerLink").href = peliculaDestacada.link;
};
window.onload = () => {
  setBanner();
};
/*Buscador*/
/*Reemplzar peliculas con el array de peliculas*/
const buscar=(movieOrCategory)=>{
    let busqueda=movieOrCategory.value.toLowerCase().trim()
    let arrayEncontrado1=peliculas.filter(pelicula=>pelicula.nombre.toLowerCase().includes(busqueda))
    let arrayEncontrado2=(peliculas.filter(pelicula=>pelicula.categories.some(categoria=>categoria.toLowerCase().includes(busqueda))))
    let arrayFinal=arrayEncontrado1.concat(arrayEncontrado2)
    
    arrayFinal.forEach(pelicula => {
        console.log(pelicula.nombre);
    });
}
