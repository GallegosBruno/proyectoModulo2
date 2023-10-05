let botonCargarPeliculas = document.getElementById("btnCargarPeliculas");
let listaPeliculas = JSON.parse(localStorage.getItem("arrayPeliculas")) || [];

//peliculas para del carrusel para que hagan click y te dirija a la pelicula detallada

const peliculas = [
  {
    codigo: "01",
    nombre: "Advengers",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    description:
      "Cuando un enemigo inesperado surge y amenaza la seguridad y la paz globales, Nick Fury, director de la agencia internacional de mantenimiento de la paz conocida como S.H.I.E.L.D., se encuentra en la necesidad de formar un equipo para evitar que el mundo caiga al borde del desastre. Abarcando todo el mundo, comienza un audaz esfuerzo de reclutamiento.",
    categories: "ficcion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=PyakRSni-c0",
  },
  {
    codigo: "02",
    nombre: "Matrix",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description:
      "Producida por Walt Disney Television Animation, basada en la película de Disney de 1989 del mismo nombre. La serie narra las aventuras de Ariel como una sirena antes de los eventos de la película. Esta serie es la primera serie de televisión de Disney que se desprende de una película animada importante.",
    categories: "Ficcion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=OM0tSTEQCQA&pp=ygUOdHJhaWxlciBtYXRyaXg%3D",
  },
  {
    codigo: "03",
    nombre: "Star Wars",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
    description: "La historia se desarrolla entre los Episodios III y IV de Star Wars, durante el dominio opresivo del Imperio Galáctico en un planeta ocupado. Un variado grupo de rebeldes a bordo de la nave estelar Ghost se enfrenta al Imperio, enfrentando desafíos y luchando por la libertad.",
    categories: "ficcion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=sGbxmsDFVnE",
  },
  {
    codigo: "04",
    nombre: "Avatar",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    description: "Ubicada más de una década después de los eventos de la primera película, esta narrativa sigue la historia de la familia Sully (Jake, Neytiri y sus hijos). Se aborda la problemática que los persigue, las medidas que toman para protegerse mutuamente, las batallas que libran por sobrevivir y las tragedias que soportan.",
    categories: "ficcion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=rjRVnVziU2A",
  },
  {
    codigo: "05",
    nombre: "Terminators",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7LV3sg3bJOGFD6J0gn7Wt1IL5SK.jpg",
    description: "Un pequeño grupo de combatientes de la resistencia lucha contra los cíborgs que han tomado el control del planeta.super héroes",
    categories: "ficcion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=DvDFA3eLzLc",
  },
  {
    codigo: "06",
    nombre: "La Sirenita",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/32Tb6HZc8yAWqHesMSMnMozr6pi.jpg",
    description:
      "Producida por Walt Disney Television Animation, basada en la película de Disney de 1989 del mismo nombre. La serie narra las aventuras de Ariel como una sirena antes de los eventos de la película. Esta serie es la primera serie de televisión de Disney que se desprende de una película animada importante.",
    categories: "infantil",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=ZGZX5-PAwR8"
  },
  {
    codigo: "07",
    nombre: "Jurassic",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
    description: "Cuatro años después de que Isla Nublar fuera destruida, los dinosaurios ahora viven, y cazan, junto a los humanos en todo el mundo. Este frágil equilibrio remodelará el futuro y determinará, de una vez por todas, si los seres humanos seguirán siendo los depredadores supremos en un planeta que ahora comparten con las criaturas más temibles de la historia.",
    categories: "ficcion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=PyakRSni-c0",
  },
  {
    codigo: "08",
    nombre: "E.T",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/an0nD6uq6byfxXCfk6lQBzdL2J1.jpg",
    description: "super héroes",
    categories: "ficcion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=F8QgAwuxXtg",
  },
  {
    codigo: "09",
    nombre: "Advengers",
    destacada: true,
    srcImage:
      "https://es.web.img3.acsta.net/c_310_420/pictures/17/01/25/13/52/576358.jpg",
    description: "super héroes",
    categories: "ficcion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=PyakRSni-c0",
  },
  {
    codigo: "10",
    nombre: "Advengers",
    destacada: true,
    srcImage:
      "https://es.web.img3.acsta.net/c_310_420/pictures/17/01/25/13/52/576358.jpg",
    description: "super héroes",
    categories: "ficcion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=PyakRSni-c0",
  },
];

function guardarPeliLocalStorage() {
  localStorage.setItem("arrayPeliculas", JSON.stringify(peliculas));
}
  function crearCarrusel() {
  let carouselActivo = document.getElementById("carouselActive");
  let carousel = document.getElementById("carrusel");
  for (let i = 0; i < listaPeliculas.length; i++) {
    if (i <= 4 && listaPeliculas[i].released && listaPeliculas[i].categories.toLowerCase()=== "ficcion") {
      carouselActivo.innerHTML += `<a href="./pages/detallePelicula.html#${listaPeliculas[i].codigo}"><img
            src=${listaPeliculas[i].srcImage}
            class="img-carrusel m-3"
            alt=${listaPeliculas[i].nombre}
          /></a>`;
    } else if (listaPeliculas[i].released && listaPeliculas[i].categories=== "ficcion") {
      carousel.innerHTML += `<a href="./pages/detallePelicula.html#${listaPeliculas[i].codigo}"><img
            src=${listaPeliculas[i].srcImage}
            class="img-carrusel m-3"
            alt=${listaPeliculas[i].nombre}
          /></a>`;
    }
  }
} 
crearCarrusel();


guardarPeliLocalStorage();
