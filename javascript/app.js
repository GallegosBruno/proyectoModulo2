let botonCargarPeliculas = document.getElementById("btnCargarPeliculas")
let listaPeliculas =  JSON.parse(localStorage.getItem("arrayPeliculas")) || []

//peliculas para del carrusel para que hagan click y te dirija a la pelicula detallada



const peliculas = [
        {
          codigo: "01",
          nombre: "Advengers",
          porcentaje: "85%",
          descripcion: "super héroes",
          genero: "ficción",
          destacado: true,
          publicado: true,
          url: "https://es.web.img3.acsta.net/c_310_420/pictures/17/01/25/13/52/576358.jpg"
        },
        {
          codigo: "02",
          nombre: "La Sirenita",
          porcentaje: "85%",
          descripcion: "Ariel, la sirenita",
          genero: "infantil",
          destacado: false,
          publicado: false,
          url: "https://es.web.img3.acsta.net/c_310_420/pictures/17/01/25/13/52/576358.jpg"
        },
        {
          codigo: "03",
          nombre: "El Señor de los Anillos",
          porcentaje: "75%",
          descripcion: "Épica aventura de fantasía",
          genero: "fantasía",
          destacado: true,
          publicado: true,
          url: "https://es.web.img3.acsta.net/c_310_420/pictures/17/01/25/13/52/576358.jpg"
        },
        {
          codigo: "04",
          nombre: "Jurassic Park",
          porcentaje: "70%",
          descripcion: "Dinosaurios regresan a la vida",
          genero: "ciencia ficción",
          destacado: false,
          publicado: true,
          url: "https://es.web.img3.acsta.net/c_310_420/pictures/17/01/25/13/52/576358.jpg"
        },
        {
          codigo: "05",
          nombre: "Harry Potter y la Piedra Filosofal",
          porcentaje: "90%",
          descripcion: "Magia y aventura en Hogwarts",
          genero: "fantasía",
          destacado: true,
          publicado: true,
          url: "https://es.web.img3.acsta.net/c_310_420/pictures/17/01/25/13/52/576358.jpg"
        },
        {
          codigo: "06",
          nombre: "Titanic",
          porcentaje: "80%",
          descripcion: "Amor y tragedia en alta mar",
          genero: "drama",
          destacado: false,
          publicado: false,
          url: "https://especiales.publico.es/resources/archivos/2016/1/13/1452680501600imagenesdelasinopsis.jpg"
        },
        {
          codigo: "07",
          nombre: "Star Wars: Una Nueva Esperanza",
          porcentaje: "85%",
          descripcion: "La lucha contra el Imperio Galáctico",
          genero: "ciencia ficción",
          destacado: true,
          publicado: true,
          url: "https://especiales.publico.es/resources/archivos/2016/1/13/1452680501600imagenesdelasinopsis.jpg"
        },
        {
          codigo: "08",
          nombre: "El Padrino",
          porcentaje: "90%",
          descripcion: "La mafia en Nueva York",
          genero: "drama",
          destacado: false,
          publicado: true,
          url: "https://especiales.publico.es/resources/archivos/2016/1/13/1452680501600imagenesdelasinopsis.jpg"
        },
        {
          codigo: "09",
          nombre: "E.T. el Extraterrestre",
          porcentaje: "80%",
          descripcion: "Amistad con un extraterrestre",
          genero: "ciencia ficción",
          destacado: true,
          publicado: true,
          url: "https://especiales.publico.es/resources/archivos/2016/1/13/1452680501600imagenesdelasinopsis.jpg"
        },
        {
          codigo: "10",
          nombre: "Forrest Gump",
          porcentaje: "85%",
          descripcion: "La vida de Forrest Gump",
          genero: "drama",
          destacado: true,
          publicado: true,
          url: "https://especiales.publico.es/resources/archivos/2016/1/13/1452680501600imagenesdelasinopsis.jpg"
        },
        {
          codigo: "11",
          nombre: "Matrix",
          porcentaje: "80%",
          descripcion: "Realidad virtual y rebelión",
          genero: "ciencia ficción",
          destacado: true,
          publicado: true,
          url: "https://especiales.publico.es/resources/archivos/2016/1/13/1452680501600imagenesdelasinopsis.jpg"
        },
        {
          codigo: "12",
          nombre: "Toy Story",
          porcentaje: "85%",
          descripcion: "Aventuras de juguetes vivientes",
          genero: "animación",
          destacado: false,
          publicado: true,
          url: "https://especiales.publico.es/resources/archivos/2016/1/13/1452680501600imagenesdelasinopsis.jpg"
        },
        {
          codigo: "13",
          nombre: "Piratas del Caribe: La Maldición del Perla Negra",
          porcentaje: "75%",
          descripcion: "Aventuras de piratas y maldiciones",
          genero: "aventura",
          destacado: true,
          publicado: true,
          url: "https://especiales.publico.es/resources/archivos/2016/1/13/1452680501600imagenesdelasinopsis.jpg"
        },
        {
          codigo: "14",
          nombre: "Avatar",
          porcentaje: "85%",
          descripcion: "Exploración de Pandora",
          genero: "ciencia ficción",
          destacado: false,
          publicado: true,
          url: "https://especiales.publico.es/resources/archivos/2016/1/13/1452680501600imagenesdelasinopsis.jpg"
        },
        {
          codigo: "15",
          nombre: "Los Increíbles",
          porcentaje: "80%",
          descripcion: "Superhéroes en familia",
          genero: "animación",
          destacado: true,
          publicado: true,
          url: "https://especiales.publico.es/resources/archivos/2016/1/13/1452680501600imagenesdelasinopsis.jpg"
        },
   
    ]
 /*    if (!localStorage.getItem("arrayPeliculas")) {
      //quiero agregar los datos de productos
      console.log("cargar datos de prueba");
      localStorage.setItem("arrayPeliculas", JSON.stringify(peliculas));
      listaPeliculas = peliculas;
      listaPeliculas.forEach((itemPeliculas) => {
        crearFila(itemPeliculas);
      });
} */
//}


function guardarPeliLocalStorage(){
  localStorage.setItem("arrayPeliculas", JSON.stringify(peliculas))
}



function crearCarrusel(){
    let carouselActivo = document.getElementById("carouselActive");
    let carousel = document.getElementById("carrusel");

    for (let i = 0; i < listaPeliculas.length; i++) {
        if (i <= 5 && listaPeliculas[i].publicado) {
            carouselActivo.innerHTML+= `<a href="./pages/detallePelicula.html#${listaPeliculas[i].codigo}"><img
            src=${listaPeliculas[i].url}
            class="h-25 m-3"
            alt=${listaPeliculas[i].nombre}
          /></a>`
            
        } else if(listaPeliculas[i].publicado) {
            carousel.innerHTML+= `<a href="./pages/detallePelicula.html#${listaPeliculas[i].codigo}"><img
            src=${listaPeliculas[i].url}
            class="img-fluid m-3"
            alt=${listaPeliculas[i].nombre}
          /></a>`
        }
    }

}

crearCarrusel()
guardarPeliLocalStorage()

