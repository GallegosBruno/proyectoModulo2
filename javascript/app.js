let listaPeliculas = JSON.parse(localStorage.getItem("arrayPeliculas")) || [];

const peliculas = [
  {
    codigo: "01",
    nombre: "Advengers",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    description: "Cuando un enemigo inesperado surge y amenaza la seguridad y la paz globales, Nick Fury, director de la agencia internacional de mantenimiento de la paz conocida como S.H.I.E.L.D., se encuentra en la necesidad de formar un equipo para evitar que el mundo caiga al borde del desastre. Abarcando todo el mundo, comienza un audaz esfuerzo de reclutamiento.",
    categories: ["ficcion", "superheroes"], // Additional category "superheroes"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=PyakRSni-c0",
  },
  {
    codigo: "02",
    nombre: "Matrix",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description: "Producida por Walt Disney Television Animation, basada en la película de Disney de 1989 del mismo nombre. La serie narra las aventuras de Ariel como una sirena antes de los eventos de la película. Esta serie es la primera serie de televisión de Disney que se desprende de una película animada importante.",
    categories: ["ficcion", "animada"], // Additional category "animada"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=OM0tSTEQCQA&pp=ygUOdHJhaWxlciBtYXRyaXg%3D",
  },
  {
    codigo: "03",
    nombre: "Star Wars",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
    description: "La historia se desarrolla entre los Episodios III y IV de Star Wars, durante el dominio opresivo del Imperio Galáctico en un planeta ocupado. Un variado grupo de rebeldes a bordo de la nave estelar Ghost se enfrenta al Imperio, enfrentando desafíos y luchando por la libertad.",
    categories: ["ficcion", "espacial"], // Additional category "espacial"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=sGbxmsDFVnE",
  },
  {
    codigo: "04",
    nombre: "Avatar",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    description: "Ubicada más de una década después de los eventos de la primera película, esta narrativa sigue la historia de la familia Sully (Jake, Neytiri y sus hijos). Se aborda la problemática que los persigue, las medidas que toman para protegerse mutuamente, las batallas que libran por sobrevivir y las tragedias que soportan.",
    categories: ["ficcion", "ciencia ficcion"], // Additional category "ciencia ficcion"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=rjRVnVziU2A",
  },
  {
    codigo: "05",
    nombre: "Terminators",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7LV3sg3bJOGFD6J0gn7Wt1IL5SK.jpg",
    description: "Un pequeño grupo de combatientes de la resistencia lucha contra los cíborgs que han tomado el control del planeta.super héroes",
    categories: ["ficcion", "ciencia ficcion"], // Additional category "ciencia ficcion"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=DvDFA3eLzLc",
  },
  {
    codigo: "06",
    nombre: "La Sirenita",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/32Tb6HZc8yAWqHesMSMnMozr6pi.jpg",
    description: "Producida por Walt Disney Television Animation, basada en la película de Disney de 1989 del mismo nombre. La serie narra las aventuras de Ariel como una sirena antes de los eventos de la película. Esta serie es la primera serie de televisión de Disney que se desprende de una película animada importante.",
    categories: ["infantil", "animada"], // Additional category "animada"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=ZGZX5-PAwR8",
  },
  {
    codigo: "07",
    nombre: "Jurassic",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
    description: "Cuatro años después de que Isla Nublar fuera destruida, los dinosaurios ahora viven, y cazan, junto a los humanos en todo el mundo. Este frágil equilibrio remodelará el futuro y determinará, de una vez por todas, si los seres humanos seguirán siendo los depredadores supremos en un planeta que ahora comparten con las criaturas más temibles de la historia.",
    categories: ["ficcion", "aventura"], // Additional category "aventura"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=PyakRSni-c0",
  },
  {
    codigo: "08",
    nombre: "E.T",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/an0nD6uq6byfxXCfk6lQBzdL2J1.jpg",
    description: "super héroes",
    categories: ["ficcion", "ciencia ficcion"], // Additional category "ciencia ficcion"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=F8QgAwuxXtg",
  },
  {
    codigo: "09",
    nombre: "Interstellar",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "La aventura de un grupo de exploradores que utilizan un agujero de gusano recién descubierto para superar las limitaciones del viaje espacial humano y conquistar las vastas distancias involucradas en un viaje interestelar.",
    categories: ["ficcion", "ciencia ficcion"], // Additional category "ciencia ficcion"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=UoSSbmD9vqc",
  },
  {
    codigo: "10",
    nombre: "Buscando a Nemo",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ggQ6o8X5984OCh3kZi2UIJQJY5y.jpg",
    description: "super héroes",
    categories: ["infantil", "animada"], // Additional category "animada"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=SPHfeNgogVs",
  },
  {
    codigo: "11",
    nombre: "La era del hielo",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dfp1BZF7FxbBUyzHvMOI9t8NWDD.jpg",
    description: "Manny, Diego y Sid se embarcan en otra aventura después de que su continente se desplace. Utilizando un iceberg como barco, se encuentran con criaturas marinas y luchan contra piratas mientras exploran un nuevo mundo.",
    categories: ["infantil", "aventura"], // Additional category "aventura"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=SGluiIsL3Yk",
  },
  {
    codigo: "12",
    nombre: "Frozen",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
    description: "La joven princesa Anna de Arendelle sueña con encontrar el verdadero amor en la coronación de su hermana Elsa. El destino la lleva en un peligroso viaje en un intento por poner fin al invierno eterno que ha caído sobre el reino. Está acompañada por el repartidor de hielo Kristoff, su reno Sven y el muñeco de nieve Olaf. En una aventura en la que descubrirá lo que realmente significan la amistad, el coraje, la familia y el amor verdadero",
    categories: ["infantil", "animada"], // Additional category "animada"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=SPHfeNgogVs",
  },
  {
    codigo: "13",
    nombre: "Cars",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/abW5AzHDaIK1n9C36VdAeOwORRA.jpg",
    description: "Un automóvil de carreras novato y ambicioso, descubre que la vida se trata del viaje, no de la línea de meta, cuando se encuentra inesperadamente desviado en la tranquila ciudad de Radiator Springs, ubicada en la histórica Ruta 66.",
    categories: ["infantil", "animada"], // Additional category "animada"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=SbXIj2T-_uk&t=16s",
  },
  {
    codigo: "14",
    nombre: "Elemental",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
    description: "En una ciudad donde conviven residentes de fuego, agua, tierra y aire, una joven apasionada y llena de energía y un chico tranquilo y adaptable descubrirán algo fundamental",
    categories: ["infantil", "animada"], // Additional category "animada"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=7KIWqmLsJRM",
  },
  {
    codigo: "15",
    nombre: "A Star is Born",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    description: "Dirigida por Bradley Cooper y protagonizada por Lady Gaga, esta película narra la historia de amor entre un músico en decadencia y una talentosa cantante en ascenso.",
    categories: ["romantico", "musical", "accion"], // Additional category "musical"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
  },
  {
    codigo: "16",
    nombre: "La La Land",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    description: "Una película musical romántica que sigue la relación entre un pianista de jazz y una aspirante a actriz en Los Ángeles.",
    categories: ["romantico", "musical", "accion"], // Additional category "musical"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=45s24h98iOc",
  },
  {
    codigo: "17",
    nombre: "To All the Boys I've Loved Before",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
    description: "Una comedia romántica adolescente que sigue la vida amorosa de una joven cuando sus cartas secretas de amor son expuestas.",
    categories: ["romantico", "comedia", "accion"], // Additional category "comedia"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=555oiY9RWM4",
  },
  {
    codigo: "18",
    nombre: "The Fault in Our Stars",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ep7dF4QR4Mm39LI958V0XbwE0hK.jpg",
    description: "Basada en la novela de John Green, esta película cuenta la historia de dos adolescentes con cáncer que se enamoran.",
    categories: ["romantico", "drama", "accion"], // Additional category "drama"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=9ItBvH5J6ss",
  },
  {
    codigo: "19",
    nombre: "Crazy Rich Asians",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg",
    description: "Una comedia romántica que sigue a una mujer que viaja a Singapur para conocer a la familia adinerada de su novio.",
    categories: ["romantico", "comedia", "accion"], // Additional category "comedia"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=ZQ-YX-5bAs0",
  },
  {
    codigo: "20",
    nombre: "Pretty Woman",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iKaKr8aUqOy1aojENu5XuwBI8Uj.jpg",
    description: "Un empresario adinerado contrata a una prostituta para que lo acompañe a eventos sociales, pero su relación se convierte en algo más.",
    categories: ["romantico", "comedia", "accion"], // Additional category "comedia"
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=Wzii8IuL8lk",
  }
];
guardarPeliLocalStorage();

function guardarPeliLocalStorage() {
  localStorage.setItem("arrayPeliculas", JSON.stringify(peliculas));
}

function cargarPeliculasPorCategoria(categoria, elementoActivo, elementoCarrusel) {
  let elementosAgregadosAlActivo = 0;

  for (let i = 0; i < listaPeliculas.length; i++) {
    const pelicula = listaPeliculas[i];

    if (
      elementosAgregadosAlActivo < 5 &&
      pelicula.released &&
      pelicula.categories.some((cat) => cat.toLowerCase() === categoria.toLowerCase())
    ) {
      elementoActivo.innerHTML += `
        <a href="./pages/detallePelicula.html#${pelicula.codigo}" class="aSinDecoracion">
          <img src="${pelicula.srcImage}" class="img-carrusel efectoFoto" alt="${pelicula.nombre}" />
        </a>
      `;
      elementosAgregadosAlActivo++;
    } else if (pelicula.released && pelicula.categories.some((cat) => cat.toLowerCase() === categoria.toLowerCase())) {
      elementoCarrusel.innerHTML += `
        <a href="./pages/detallePelicula.html#${pelicula.codigo}" class="aSinDecoracion">
          <img src="${pelicula.srcImage}" class="img-carrusel efectoFoto" alt="${pelicula.nombre}" />
        </a>
      `;
    }
  }
}

function cargarCarruseles() {
  cargarPeliculasPorCategoria("ficcion", document.getElementById("carouselActive"), document.getElementById("carrusel"));
  cargarPeliculasPorCategoria("Infantil", document.getElementById("carouselActiveInfantil"), document.getElementById("carruselInfantil"));
  cargarPeliculasPorCategoria("romantico", document.getElementById("carouselActiveRomantico"), document.getElementById("carruselRomantico"));
  cargarPeliculasPorCategoria("accion", document.getElementById("carouselActiveAccion"), document.getElementById("carruselAccion"));
}

cargarCarruseles();
