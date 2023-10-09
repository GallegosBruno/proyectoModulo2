let resultadoBusqueda = JSON.parse(localStorage.getItem('resultadoBusqueda'));

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
    let resultadoBusqueda=JSON.parse(localStorage.getItem("resultadoBusqueda"))
    for (let i = 0; i < resultadoBusqueda.length; i++) {
      const pelicula = resultadoBusqueda[i];
  
      if (elementosAgregadosAlActivo < 5) {
        elementoActivo.innerHTML += `
        <a href="./pages/detallePelicula.html#${pelicula.codigo}" class="aSinDecoracion">
          <img src="${pelicula.srcImage}" class="img-carrusel efectoFoto" alt="${pelicula.nombre}" />
        </a>
        `;
        elementosAgregadosAlActivo++;
      } else{
        elementoCarrusel.innerHTML += `
        <a href="./pages/detallePelicula.html#${pelicula.codigo}" class="aSinDecoracion">
          <img src="${pelicula.srcImage}" class="img-carrusel efectoFoto" alt="${pelicula.nombre}" />
        </a>
        `;
      }
    }
  }
  cargarCarouselResultados(document.getElementById("carouselActiveAccion"), document.getElementById("carruselAccion"));

/*Me olvide que existia css*/
const searchIconPressed=()=>{
  document.getElementById("searchIcon").style.backgroundColor="violet"
}
const searchIconReleased=()=>{
  document.getElementById("searchIcon").style.backgroundColor="purple"
}