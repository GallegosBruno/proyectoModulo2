class Peliculas {
    constructor(
        codigo,
        nombre,
        destacada,
        description,
        srcImage,
        categories,
        released,
        trailerLink)
    {
        this.codigo = codigo;
        this.nombre = nombre;
        this.destacada = destacada;
        this.poster = srcImage;
        this.description = description;
        this.categories = categories;
        this.released = released;
        this.link = trailerLink;
    }
}

let peliculaDestacada = new Peliculas(
    12356,
    "Transformes",
    true,
    "Em la nuva de transforme todo muere pibe",
    "./assets/Posters de peliculas/pel5.jpg",
    "Accion aventura",
    true,
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
