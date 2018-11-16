const Index = () => (
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">SIDSEN</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">Quienes Somos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#projects">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#signup">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header class="masthead">
    <div class="container d-flex h-100 align-items-center">
      <div class="mx-auto text-center" style="background-color: rgba(119, 150, 224, 0.55);">
        <h1 class="mx-auto my-0 text-uppercase">SIIDSEN</h1>
      </div>
      <h2 style="color: rgb(238, 232, 187)!important" class="text-white-50 mx-auto mt-2 mb-5">Sistemas Electrónicos de Seguridad y Automatización</h2>
    </div>
  </header>

  <section id="about" class="about-section text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="text-white mb-4">Sistemas CCTV</h2>
          <p class="text-white-50">Sabemos lo importante que es la seguridad para tí, por eso tenemos un extenso catálogo sobre seguridad. Puede ver nuestros servicios
            <a href="http://startbootstrap.com/template-overviews/grayscale/">en ese link</a>.
          </p>
        </div>
      </div>
      <img src="img/cctv.png" class="img-fluid" alt="">
    </div>
  </section>

  <section id="projects" class="projects-section bg-light" style="background-color:white !important">
    <div class="container">

      <div class="row align-items-center no-gutters mb-4 mb-lg-5">
        <div class="col-xl-8 col-lg-7">
          <img class="img-fluid mb-3 mb-lg-0" src="img/automatic.png" alt="">
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="featured-text text-center text-lg-left">
            <h4>Domótica</h4>
            <p class="text-black-50 mb-0">La automatización y <a id="popover" href="#" data-content="Se llama domótica a los sistemas capaces de automatizar una vivienda o edificación de cualquier tipo, aportando servicios de gestión energética, seguridad, bienestar y comunicación, y que pueden estar integrados por medio de redes interiores y exteriores de comunicación, cableadas o inalámbricas, y cuyo control goza de cierta ubicuidad, desde dentro y fuera del hogar. Se podría definir como la integración de la tecnología en el diseño inteligente de un recinto cerrado." rel="popover" data-placement="bottom" data-original-title="La Domótica" data-trigger="hover" data-placement="top">domótica</a> es cada vez una realidad, ayudamos a cuidar el planeta con la implementación de celdas solares, calentadores de agua, regulación de energía, prendido automático de fuentes de luz, todo lo necesario para un hogar inteligente, y con conexión a su dispositivo móvil</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div class="col-lg-6">

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="img/slidercctv1.jpg?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="img/slidercctv2.jpg?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="img/slidercctv3.jpg?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="img/slidercctv4.jpg?auto=yes&bg=444&fg=222&text=Fourth slide" alt="Fourth slide">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
    
        </div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">CCTV</h4>
                <p class="mb-0 text-white-50">Somos expertos en la instalación y/o mantenimiento de sistemas de videovigilancia, contamos con un catálogo extenso de soluciones en cámaras tipo bala, domo o PTZ, 4K, y con interconexión a la red.
                <hr class="d-none d-lg-block mb-0 ml-0">
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row justify-content-center no-gutters">
        <div class="col-lg-6">
          <img class="img-fluid" src="img/lgenergy.png" alt="">
        </div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Energía Solar</h4>
                <p class="mb-0 text-white-50">Sistemas para Ahorro de Energía o Alimentación de Equipos en Áreas sin Energía Eléctrica, o en áreas para bajar el consumo de energía eléctrica. Con conección a medidores de CFE, en cualquier parte de la república mexicana.</p>
                <hr class="d-none d-lg-block mb-0 mr-0">
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>


  <section class="contact-section bg-black">
    <div class="container">

      <div class="row">

        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-map-marked-alt text-primary mb-2"></i>
              <h4 class="text-uppercase m-0">FaceBook</h4>
              <hr class="my-4">
              <div class="small text-black-50">
                <a href="https://www.facebook.com/sistemasdeseguridadsidse/">
                    FB Sidsen
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-envelope text-primary mb-2"></i>
              <h4 class="text-uppercase m-0">Correo Electrónico</h4>
              <hr class="my-4">
              <div class="small text-black-50">
                <a href="#">sidse.info@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-mobile-alt text-primary mb-2"></i>
              <h4 class="text-uppercase m-0">Teléfono</h4>
              <hr class="my-4">
              <div class="small text-black-50">(55) 7425 9504</div>
            </div>
          </div>
        </div>
      </div>

      <div class="social d-flex justify-content-center">
        <a href="https://www.facebook.com/sistemasdeseguridadsidse/" class="mx-2">
          <i class="fab fa-facebook-f"></i>
        </a>
      </div>

    </div>
  </section>

  <footer class="bg-black small text-center text-white-50">
    <div class="container">
      Copyright &copy; Grupo Multimedia SIIDSEN 2018
    </div>
  </footer>
)

export default Index;
