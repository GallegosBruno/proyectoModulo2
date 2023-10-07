let resultadoBusqueda = JSON.parse(localStorage.getItem('resultadoBusqueda'));
console.log(resultadoBusqueda)
let listaPeliculas=JSON.parse(localStorage.getItem("arrayPeliculas"))

const buscar=(movieOrCategory)=>{ 
    let busqueda=movieOrCategory.value.trim()
    let peliculas=JSON.parse(localStorage.getItem("arrayPeliculas"))

    let arrayEncontrado1=peliculas.filter(pelicula=>pelicula.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    let arrayEncontrado2=(peliculas.filter(pelicula=>pelicula.categories.some(categoria=>categoria.toLowerCase().includes(busqueda.toLowerCase()))))
    let arrayFinal=arrayEncontrado1.concat(arrayEncontrado2)
    
    localStorage.setItem("resultadoBusqueda",JSON.stringify(arrayFinal))
    localStorage.setItem("valorBusqueda",JSON.stringify(busqueda))
}

function cargarCarouselResultados(elementoActivo, elementoCarrusel) {
    let elementosAgregadosAlActivo = 0;
    document.getElementById("tituloBusqueda").innerText= JSON.parse(localStorage.getItem("valorBusqueda"))
  
    for (let i = 0; i < resultadoBusqueda.length; i++) {
      const pelicula = resultadoBusqueda[i];
  
      if (elementosAgregadosAlActivo < 5) {
        elementoActivo.innerHTML += `
          <a href="./pages/detallePelicula.html#${pelicula.codigo}">
            <img src="${pelicula.srcImage}" class="img-carrusel m-3" alt="${pelicula.nombre}" />
          </a>
        `;
        elementosAgregadosAlActivo++;
      } else if (pelicula.released && pelicula.categories.some((cat) => cat.toLowerCase() === categoria.toLowerCase())) {
        elementoCarrusel.innerHTML += `
          <a href="./pages/detallePelicula.html#${pelicula.codigo}">
            <img src="${pelicula.srcImage}" class="img-carrusel m-3" alt="${pelicula.nombre}" />
          </a>
        `;
      }
    }
  }
  cargarCarouselResultados(document.getElementById("carouselActiveAccion"), document.getElementById("carruselAccion"));



/*for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); // Get the key at the current index
    const value = localStorage.getItem(key); // Get the value associated with the key
  
    console.log(`Key: ${key}, Value: ${value}`);
  }
console.log("damn")
/*let peliculasData=localStorage.getItem[peliculas]
console.log(peliculasData)*/