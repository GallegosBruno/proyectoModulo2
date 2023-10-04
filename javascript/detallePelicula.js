function getCodigoPeliculaFromHash() {
  const hash = location.hash;
  console.log(hash)
  return hash.substring(1);
}
const codigoPelicula = getCodigoPeliculaFromHash();
console.log("Código de la película:", codigoPelicula);
let listaPeliculas = JSON.parse(localStorage.getItem("arrayPeliculas")) || []



const detallePelicula = () => {
  let detallePelicula = document.getElementById("detallePelicula")
  let pelicula= listaPeliculas.find((item)=>item.codigo === codigoPelicula)

  detallePelicula.innerHTML = `
<h1 class="text-center display-3">Detalles de la pelicula</h1>
              <hr />
              <article class="row py-2">
                <div class="col-sm-12 col-md-6 col-lg-4">
                  <h2>${pelicula.nombre}</h2>
                  <p class="lead">
                    Original de <span class="fw-bold">RollingMovies+</span>
                  </p>
                  <p class="pt-4">
                    <span class="text-success fw-bold">${pelicula.porcentaje} para ti</span> | 2016. 1hs
                    28 min
                  </p>
                  <p>
                    ${pelicula.descripcion}
                  </p>
                  <button class="btn btn-reproducir px-4 mb-5 text-center"><i class="fa-solid fa-play" style="color: #ffffff;"></i> Reproducir</button>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div class="d-flex justify-content-center"> <img
                    src=${pelicula.url}
                    class="w-50"
                  /></div>
                 
                </div>
              </article>`
}

detallePelicula()