import React from "react";
import { VariablesContext } from "../../context/VariablesProvider";
import imgGenerica from "../../img/generica.webp";
import imgRosario from "../../img/ciro-rosario.webp";

const Eventos = (props) => {
  const { variables } = React.useContext(VariablesContext);

  return (
    <main id="main">
      <section id="team">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">{variables.tituloEventos}</h3>
              <div className="section-title-divider"></div>
            </div>
          </div>

          <div className="row">
           

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
              <div className="card">
                <img
                  src={imgGenerica}
                  className="card-img-top"
                  alt={variables.altImg}
                />
                <div className="card-body">
                  {/* <h6 className='card-title'>{variables.tituloImagenes}</h6> */}

                  <div className="fecha-hora">
                    <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Fecha:</span>
                    <span className="ms-1">1 de Octubre</span>
                  </div>

                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Hora:</span>
                    <span className="ms-1">21:00hs</span>
                  </div>
                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Lugar: </span>
                    <span className="ms-1">Corrientes</span>
                  </div>

                  <a
                    className="btn btn-primary btn-color mt-4"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.tuentrada.com/eventos/detalle/CIRO-Corrientes/448749575919"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
              <div className="card">
                <img
                  src={imgGenerica}
                  className="card-img-top"
                  alt={variables.altImg}
                />
                <div className="card-body">
                  {/* <h6 className='card-title'>{variables.tituloImagenes}</h6> */}

                  <div className="fecha-hora">
                    <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Fecha:</span>
                    <span className="ms-1">8 de Octubre</span>
                  </div>

                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Hora:</span>
                    <span className="ms-1">22:00hs</span>
                  </div>
                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Lugar: </span>
                    <span className="ms-1">Entre Ríos</span>
                  </div>

                  <a
                    className="btn btn-primary btn-color mt-4"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.tuentrada.com/eventos/detalle/CIRO-Federacion/118916599407"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
              <div className="card">
                <img
                  src={imgGenerica}
                  className="card-img-top"
                  alt={variables.altImg}
                />
                <div className="card-body">
                  {/* <h6 className='card-title'>{variables.tituloImagenes}</h6> */}

                  <div className="fecha-hora">
                    <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Fecha:</span>
                    <span className="ms-1">22 de Octubre</span>
                  </div>

                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Hora:</span>
                    <span className="ms-1">21:00hs</span>
                  </div>
                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Lugar: </span>
                    <span className="ms-1">CABA</span>
                  </div>

                  <a
                    className="btn btn-primary btn-color mt-4"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.ticketek.com.ar/ciro-y-los-persas/estadio-velez-sarsfield"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
              <div className="card">
                <img
                  src={imgRosario}
                  className="card-img-top"
                  alt={variables.altImg}
                />
                <div className="card-body">
                  {/* <h6 className='card-title'>{variables.tituloImagenes}</h6> */}

                  <div className="fecha-hora">
                    <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Fecha:</span>
                    <span className="ms-1">17 de Diciembre</span>
                  </div>

                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Hora:</span>
                    <span className="ms-1">21:00hs</span>
                  </div>
                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Lugar: </span>
                    <span className="ms-1">Rosario</span>
                  </div>

                  <a
                    className="btn btn-primary btn-color mt-4"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.tuentrada.com/eventos/detalle/Ciro-ROS/262465788517"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Eventos;
