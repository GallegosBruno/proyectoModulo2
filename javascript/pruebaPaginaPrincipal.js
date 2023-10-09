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
        this.srcImage = srcImage;
        this.description = description;
        this.categories = categories;
        this.released = released;
        this.link = trailerLink;
    }
}

let peliculaDestacada = {
    codigo: "03",
    nombre: "Star Wars",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
    description: "La historia se desarrolla entre los Episodios III y IV de Star Wars, durante el dominio opresivo del Imperio Galáctico en un planeta ocupado. Un variado grupo de rebeldes a bordo de la nave estelar Ghost se enfrenta al Imperio, enfrentando desafíos y luchando por la libertad.",
    categories: ["ficcion", "espacial"], // Additional category "espacial"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=sGbxmsDFVnE",
}

/*Funciones de pagina principal*/
/*AÑADIR AL ARCHIVO DE JAVA COMUN Y BORRAR LO DE ARRIBA*/
const setBanner = () => {
    document.getElementById("mainBannerImg").src = peliculaDestacada.srcImage;
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
    let busqueda=movieOrCategory.value.trim()
    let peliculas=JSON.parse(localStorage.getItem("arrayPeliculas"))

    let arrayEncontrado1=peliculas.filter(pelicula=>pelicula.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    let arrayEncontrado2=(peliculas.filter(pelicula=>pelicula.categories.some(categoria=>categoria.toLowerCase().includes(busqueda.toLowerCase()))))
    let arrayFinal=arrayEncontrado1.concat(arrayEncontrado2)
    
    localStorage.setItem("resultadoBusqueda",JSON.stringify(arrayFinal))
    localStorage.setItem("valorBusqueda",JSON.stringify(busqueda))
    /*arrayFinal.forEach(pelicula => {
        console.log(pelicula.nombre);
    });*/
}
/*Me olvide que existia css*/
const searchIconPressed=()=>{
    document.getElementById("searchIcon").style.backgroundColor="violet"
}
const searchIconReleased=()=>{
    document.getElementById("searchIcon").style.backgroundColor="purple"
}

