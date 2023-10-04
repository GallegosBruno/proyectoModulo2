<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../css/styles.css" />
    <title>Rollingcommerce</title>
  </head>
  <body>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a
            class="navbar-brand d-flex align-items-center"
            href="../index.html"
          >
            <img
              class="rounded-circle"
              src="../images/Logo.jpg"
              alt=""
              width="60"
              height="47"
            />
            <span class="header_title"
              >Rolling<span class="header_title-modified">Commerce</span></span
            >
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li><a class="dropdown-item" href="#">Categoría 1</a></li>
                  <li><a class="dropdown-item" href="#">Categoría 2</a></li>
                  <li><a class="dropdown-item" href="#">Categoría 3</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../pages/aboutUs.html">Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
              <li class="nav-item">
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Buscar productos"
                    aria-label="Search"
                  />
                  <button class="btn" type="submit">
                    <i class="bi bi-search"></i>
                  </button>
                </form>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-cart-fill"></i></a>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="btn bi bi-person nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#login"
                ></button>
                <div
                  class="modal fade"
                  id="login"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myModalLogin"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-side" role="document">
                    <div class="modal-content">
                      <div class="modal-header d-flex justify-content-around">
                        <div class="text-center mt-5">
                          <img
                            src="../images/Logo.jpg"
                            alt="Logo Rolling commerce"
                            class="img-fluid imgRollingC"
                          />

                          <div class="d-flex mt-2">
                            <h4 class="modal-title w-100 text-danger mt-3">
                              Rolling
                            </h4>
                            <h4 class="modal-title w-100 mt-3">Commerce</h4>
                          </div>
                        </div>
                        <button
                          type="button"
                          class="btn-close btnColor position-absolute top-0 end-0 m-3"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <h4 class="modal-title text-center w-100 mt-3">
                        INICIAR SESION
                      </h4>
                      <form action="">
                        <div class="modal-body mx-3">
                          <div class="md-form">
                            <i class="fas fa-envelope prefix grey-text"></i>
                            <input
                              type="email"
                              id="email"
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                              required
                              minlength="12"
                              maxlength="35"
                              class="form-control validate colorLabelLogin"
                              placeholder="Email"
                            />
                            <label
                              data-error="wrong"
                              data-success="right"
                              for="email"
                            ></label>
                          </div>

                          <div class="md-form">
                            <i class="fas fa-lock prefix grey-text"></i>
                            <input
                              type="password"
                              id="pass"
                              minlength="8"
                              maxlength="20"
                              class="form-control validate colorLabelLogin"
                              placeholder="Contraseña"
                            />
                            <label
                              data-error="wrong"
                              data-success="right"
                              for="pass"
                            ></label>
                          </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                          <button type="submit" class="btn btnLogin">
                            Iniciar sesión
                          </button>
                          <a href="" class="mt-3">Regístrate</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <button id="theme-toggler" class="btn">
                  <i class="bi bi-moon-fill"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="cart_overlay cart_display">
        <div class="container_cart">
          <h5 class="mb-0">Carrito</h5>
          <div class="cart_slider d-flex flex-column">
            <div
              class="cart_items d-flex justify-content-between align-items-center"
            >
              <div
                class="cart_image d-flex justify-content-center align-items-center"
              >
                <img
                  src="../images/auricular1.png"
                  class="w-100"
                  alt="Auricular"
                />
              </div>
              <div class="cart_desc d-flex flex-column">
                <p class="cart_item-title mb-0">Astro A30</p>
                <div class="cart_desc-price d-flex gap-1">
                  <p class="mb-0">$499</p>
                  <div class="cart_desc-quantity d-flex">
                    <span>x1</span>
                    <span class="price">$499</span>
                  </div>
                </div>
              </div>
              <i class="bi bi-trash"></i>
            </div>
            <div
              class="cart_items d-flex justify-content-between align-items-center"
            >
              <div
                class="cart_image d-flex justify-content-center align-items-center"
              >
                <img
                  src="../images/auricular1.png"
                  class="w-100"
                  alt="Auricular"
                />
              </div>
              <div class="cart_desc d-flex flex-column">
                <p class="cart_item-title mb-0">Astro A30</p>
                <div class="cart_desc-price d-flex gap-1">
                  <p class="mb-0">$499</p>
                  <div class="cart_desc-quantity d-flex">
                    <span>x1</span>
                    <span class="price">$499</span>
                  </div>
                </div>
              </div>
              <i class="bi bi-trash"></i>
            </div>
          </div>
          <div
            class="cart_total d-flex flex-column justify-content-center align-items-center"
          >
            <h4 class="mb-0">Total - <span>$499</span></h4>
            <button>Comprar</button>
          </div>
        </div>
      </div>
      <section class="container p-5">
        <article class="row">
          <div class="col-12 col-sm-12 col-md-4 text-center">
            <h2 class="text-dark h1">Nuestros<br />valores</h2>
          </div>
          <div class="col-12 col-sm-12 col-md-8">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-6">
                <i class="bi bi-megaphone-fill h1"></i>
                <p class="text-dark mb-2 title_value">Transparencia</p>
                <p class="mb-2">Planteamos problemas y ofrecemos soluciones.</p>
              </div>
              <div class="col-12 col-sm-6 col-md-6">
                <i class="bi bi-suit-heart-fill h1"></i>
                <p class="text-dark mb-2 title_value">Compromiso</p>
                <p class="mb-2">No hay exito sin compromiso.</p>
              </div>
              <div class="col-12 col-sm-6 col-md-6">
                <i class="bi bi-journal-text h1"></i>
                <p class="text-dark mb-2 title_value">Aprendizaje continuo</p>
                <p class="mb-2">Nunca dejar de aprender.</p>
              </div>
              <div class="col-12 col-sm-6 col-md-6">
                <i class="bi bi-people-fill h1"></i>
                <p class="text-dark mb-2 title_value">Disciplina</p>
                <p class="mb-2">La disciplina te mantiene creciendo.</p>
              </div>
            </div>
          </div>
        </article>
        <article class="row text-center">
          <div class="col-12 col-sm-12 col-md-12 my-4">
            <h2 class="text-dark mt-2 h1">Nuestro equipo</h2>
          </div>
          <div class="col-12 col-sm-6 col-md-4 my-4">
            <img src="../images/mateo.png" alt="foto perfil" />
            <p class="text-dark mt-2">Bellini, Mateo</p>
          </div>
          <div class="col-12 col-sm-6 col-md-4 my-4">
            <img src="../images/juan.png" alt="foto perfil" />
            <p class="text-dark mt-2">Toranzos, Juan</p>
          </div>
          <div class="col-12 col-sm-6 col-md-4 my-4">
            <img src="../images/ana.png" alt="foto perfil" />
            <p class="text-dark mt-2">Rocha, Ana</p>
          </div>
          <div class="col-12 col-sm-6 col-md-6 my-4">
            <img src="../images/sofi.png" alt="foto perfil" />
            <p class="text-dark mt-2">Delgado, Sofi</p>
          </div>
          <div class="col-12 col-sm-12 col-md-6 my-4">
            <img src="../images/mario.png" alt="foto perfil" />
            <p class="text-dark mt-2">Chávez, Mario</p>
          </div>
        </article>
      </section>
    </main>
    <footer class="mt-auto bg-black text-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-center text-md-start">
            <h3 id="h3">INFORMACIÓN</h3>
            <ul class="list-unstyled">
              <li class="py-1">
                <a
                  href="#"
                  class="footer-link text-decoration-none text_newsletter"
                  >Acerca de nosotros</a
                >
              </li>
              <li class="py-1">
                <a
                  href="#"
                  class="footer-link text-decoration-none text_newsletter"
                  >Información de entrega</a
                >
              </li>
              <li class="py-1">
                <a
                  href="#"
                  class="footer-link text-decoration-none text_newsletter"
                  >Políticas de privacidad</a
                >
              </li>
              <li class="py-1">
                <a
                  href="#"
                  class="footer-link text-decoration-none text_newsletter"
                  >Términos y condiciones</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-4 text-center text-md-start">
            <h3 id="h3">MI CUENTA</h3>
            <ul class="list-unstyled">
              <li class="py-1">
                <a
                  href="#"
                  class="footer-link text-decoration-none text_newsletter"
                  >Historial de pedidos</a
                >
              </li>
              <li class="py-1">
                <a
                  href="#"
                  class="footer-link text-decoration-none text_newsletter"
                  >Boletín</a
                >
              </li>
              <li class="py-1">
                <a
                  href="#"
                  class="footer-link text-decoration-none text_newsletter"
                  >Reembolsos</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-4 text-center text-md-start">
            <h3 id="h3" class="text-decoration-none">BOLETÍN INFORMATIVO</h3>
            <p class="text-white text-center text_newsletter text-md-start">
              Suscríbete a nuestros boletines ahora y mantente al día.
            </p>
            <form class="form-footer">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control w-100 input-email"
                  placeholder="Ingrese el correo electrónico"
                />
              </div>
              <button class="btn btn-danger mt-3 w-100" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
    <script src="../js/cart.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
      crossorigin="anonymous"
    ></script>
  </body>
</html>