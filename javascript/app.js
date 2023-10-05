let botonCargarPeliculas = document.getElementById("btnCargarPeliculas")
let listaPeliculas =  JSON.parse(localStorage.getItem("arrayPeliculas")) || []

//peliculas para del carrusel para que hagan click y te dirija a la pelicula detallada



const peliculas = [
        {
          codigo: "01",
          nombre: "Advengers",
          destacada: true,
          srcImage: "https://es.web.img3.acsta.net/c_310_420/pictures/17/01/25/13/52/576358.jpg",
          description: "super héroes",
          categories: "ficción",
          released: true,
          trailerLink:"https://www.youtube.com/watch?v=PyakRSni-c0"
        } 
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
        if (i <= 5 && listaPeliculas[i].released) {
            carouselActivo.innerHTML+= `<a href="./pages/detallePelicula.html#${listaPeliculas[i].codigo}"><img
            src=${listaPeliculas[i].srcImage}
            class="h-25 m-3"
            alt=${listaPeliculas[i].nombre}
          /></a>`
            
        } else if(listaPeliculas[i].released) {
            carousel.innerHTML+= `<a href="./pages/detallePelicula.html#${listaPeliculas[i].codigo}"><img
            src=${listaPeliculas[i].srcImage}
            class="img-fluid m-3"
            alt=${listaPeliculas[i].nombre}
          /></a>`
        }
    }

}

crearCarrusel()
guardarPeliLocalStorage()

