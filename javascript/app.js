let listaPeliculas = JSON.parse(localStorage.getItem("arrayPeliculas")) || [];

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
    categories:"infantil",
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
    nombre: "Interstellar",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "La aventura de un grupo de exploradores que utilizan un agujero de gusano recién descubierto para superar las limitaciones del viaje espacial humano y conquistar las vastas distancias involucradas en un viaje interestelar.",
    categories: "ficcion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=UoSSbmD9vqc",
  },
  {
    codigo: "10",
    nombre: "Buscando a Nemo",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ggQ6o8X5984OCh3kZi2UIJQJY5y.jpg",
    description: "super héroes",
    categories: "infantil",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=SPHfeNgogVs",
  },
  {
    codigo: "11",
    nombre: "La era del hielo",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dfp1BZF7FxbBUyzHvMOI9t8NWDD.jpg",
    description: "Manny, Diego y Sid se embarcan en otra aventura después de que su continente se desplace. Utilizando un iceberg como barco, se encuentran con criaturas marinas y luchan contra piratas mientras exploran un nuevo mundo.",
    categories: "infantil",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=SGluiIsL3Yk",
  },
  {
    codigo: "12",
    nombre: "Frozen",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
    description: "La joven princesa Anna de Arendelle sueña con encontrar el verdadero amor en la coronación de su hermana Elsa. El destino la lleva en un peligroso viaje en un intento por poner fin al invierno eterno que ha caído sobre el reino. Está acompañada por el repartidor de hielo Kristoff, su reno Sven y el muñeco de nieve Olaf. En una aventura en la que descubrirá lo que realmente significan la amistad, el coraje, la familia y el amor verdadero",
    categories: "infantil",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=SPHfeNgogVs",
  },
  {
    codigo: "13",
    nombre: "Cars",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/abW5AzHDaIK1n9C36VdAeOwORRA.jpg",
    description: "Un automóvil de carreras novato y ambicioso, descubre que la vida se trata del viaje, no de la línea de meta, cuando se encuentra inesperadamente desviado en la tranquila ciudad de Radiator Springs, ubicada en la histórica Ruta 66.",
    categories: "infantil",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=SbXIj2T-_uk&t=16s",
  },
  {
    codigo: "14",
    nombre: "Elemental",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
    description: "En una ciudad donde conviven residentes de fuego, agua, tierra y aire, una joven apasionada y llena de energía y un chico tranquilo y adaptable descubrirán algo fundamental",
    categories: "infantil",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=7KIWqmLsJRM",
  },
  {
    codigo: "15",
    nombre: "A Star is Born",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    description: "Dirigida por Bradley Cooper y protagonizada por Lady Gaga, esta película narra la historia de amor entre un músico en decadencia y una talentosa cantante en ascenso.",
    categories: "romantico",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=nSbzyEJ8X9E",
  },
  {
    codigo: "16",
    nombre: "La La Land",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    description: "Una película musical romántica que sigue la relación entre un pianista de jazz y una aspirante a actriz en Los Ángeles.",
    categories: "romantico",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=45s24h98iOc",
  },
  {
    codigo: "17",
    nombre: "To All the Boys I've Loved Before",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
    description: "Una comedia romántica adolescente que sigue la vida amorosa de una joven cuando sus cartas secretas de amor son expuestas.",
    categories: "romantico",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=555oiY9RWM4",
  },
  {
    codigo: "18",
    nombre: "The Fault in Our Stars",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ep7dF4QR4Mm39LI958V0XbwE0hK.jpg",
    description: "Basada en la novela de John Green, esta película cuenta la historia de dos adolescentes con cáncer que se enamoran.",
    categories: "romantico",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=9ItBvH5J6ss",
  },
  {
    codigo: "19",
    nombre: "Crazy Rich Asians",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg",
    description: "Una comedia romántica que sigue a una mujer que viaja a Singapur para conocer a la familia adinerada de su novio.",
    categories: "romantico",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=ZQ-YX-5bAs0",
  },
  {
    codigo: "20",
    nombre: "Crazy Rich Asians",
    destacada: true,
    srcImage:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kf1Jb1c2JAOqjuzA3H4oDM263uB.jpg",
    description: "Una comedia romántica que sigue a una mujer que viaja a Singapur para conocer a la familia adinerada de su novio.",
    categories: "romantico",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=X57WUfsRcio",
  },
  {
    codigo: "21",
    nombre: "John Wick",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/v1YEOdGptCyNxnc4mJSYNd4cE8E.jpg",
    description: "Un exasesino a sueldo busca venganza después de que roben su auto y maten a su perro, la última conexión con su difunta esposa.",
    categories: "accion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=y3FzXBkCUAg"
  },
  {
    codigo: "22",
    nombre: "Mad Max: Fury Road",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    description: "En un mundo postapocalíptico, Max se une a Furiosa para escapar de un tirano y su ejército en una espectacular persecución a través del desierto.",
    categories: "accion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=hEJnMQG9ev8"
  },
  {
    codigo: "23",
    nombre: "Die Hard",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg",
    description: "El oficial de policía John McClane se enfrenta a terroristas que toman como rehenes a un edificio de oficinas en Navidad.",
    categories: "accion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=gYWvwkXreaI"
  },
  {codigo: "24",
  nombre: "Inception",
  destacada: true,
  srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  description: "Dom Cobb es un ladrón de sueños que roba secretos del subconsciente de las personas mientras están en su estado de sueño profundo.",
  categories: "accion",
  released: true,
  trailerLink: "https://www.youtube.com/watch?v=RV9L7ui9Cn8"},
  {
    codigo: "25",
    nombre: "The Dark Knight",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman se enfrenta al Joker, un criminal psicótico que amenaza a Gotham City con el caos y la destrucción.",
    categories: "accion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=TQfATDZY5Y4"
  },
  {
    codigo: "28",
    nombre: "Kill Bill: Vol. 1",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    description: "Una ex asesina a sueldo despierta de un coma y busca venganza contra sus antiguos compañeros y su ex jefe.",
    categories: "accion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=7kSuas6mRpk"
  },
  {
    codigo: "29",
    nombre: "Gladiator",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    description: "Un general romano es traicionado y su familia es asesinada. Se convierte en gladiador y busca venganza contra el emperador que lo traicionó.",
    categories: "accion",
    released: true,
    trailerLink: "https://www.youtube.com/watch?v=P5ieIbInFpg"
  },
  {
    codigo: "30",
    nombre: "The Matrix Reloaded",
    destacada: true,
    srcImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg",
    description: "Neo lucha contra las máquinas mientras intenta descubrir el propósito de su existencia en el mundo simulado de Matrix.",
    categories: "accion",
    released: true,
    trailerLink: ""
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
      pelicula.categories.toLowerCase() === categoria.toLowerCase()
    ) {
      elementoActivo.innerHTML += `
        <a href="./pages/detallePelicula.html#${pelicula.codigo}">
          <img src="${pelicula.srcImage}" class="img-carrusel m-3" alt="${pelicula.nombre}" />
        </a>
      `;
      elementosAgregadosAlActivo++;
    } else if (pelicula.released && pelicula.categories.toLowerCase() === categoria.toLowerCase()) {
      elementoCarrusel.innerHTML += `
        <a href="./pages/detallePelicula.html#${pelicula.codigo}">
          <img src="${pelicula.srcImage}" class="img-carrusel m-3" alt="${pelicula.nombre}" />
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
console.log("app.js loaded")


