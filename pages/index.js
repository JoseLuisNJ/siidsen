const Index = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">SIDSEN</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">Quienes Somos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#projects">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#signup">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Index;
