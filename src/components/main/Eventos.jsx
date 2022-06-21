import React from "react";
import { VariablesContext } from "../../context/VariablesProvider";
import imgTrelew from "../../img/CIROtrelew.webp";
import imgBahia from "../../img/CIRObahia.webp";
import imgBariloche from "../../img/CIRObariloche.webp";
import imgNeuquen from "../../img/CIROneuquen.webp";
import imgGenerica from "../../img/generica.webp";

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
                  src="https://www.tuentrada.com/images/627935f2e3ca7.webp"
                  className="card-img-top"
                  alt={variables.altImg}
                />
                <div className="card-body">
                  {/* <h6 className='card-title'>{variables.tituloImagenes}</h6> */}

                  <div className="fecha-hora">
                    <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Fecha:</span>
                    <span className="ms-1">19 de agosto</span>
                  </div>

                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Hora:</span>
                    <span className="ms-1">21:00hs</span>
                  </div>
                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Lugar: </span>
                    <span className="ms-1">Junín</span>
                  </div>

                  <a
                    className="btn btn-primary btn-color mt-4"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.tuentrada.com/eventos/detalle/Ciro/500592707699"
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
                    <span className="ms-1">21 de agosto</span>
                  </div>

                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Hora:</span>
                    <span className="ms-1">20:00hs</span>
                  </div>
                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Lugar: </span>
                    <span className="ms-1">C. Rivadavia</span>
                  </div>

                  <a
                    className="btn btn-primary btn-color mt-4"
                    rel="noreferrer"
                    target="_blank"
                    href="https://cdmticket.ar/detalle/CIRO-Y-LOS-PERSAS-EN-COMODORO-2022/"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
              <div className="card">
                <img
                  src={imgTrelew}
                  className="card-img-top"
                  alt={variables.altImg}
                />
                <div className="card-body">
                  {/* <h6 className='card-title'>{variables.tituloImagenes}</h6> */}

                  <div className="fecha-hora">
                    <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Fecha:</span>
                    <span className="ms-1">23 de agosto</span>
                  </div>

                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Hora:</span>
                    <span className="ms-1">21:00hs</span>
                  </div>
                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Lugar: </span>
                    <span className="ms-1">Trelew</span>
                  </div>

                  <a
                    className="btn btn-primary btn-color mt-4"
                    rel="noreferrer"
                    target="_blank"
                    href="https://entradauno.com/11722-ciro-y-los-persas/gimnasio-municipal/funcion/26398/?h=5b16f62f768165f19be6f8d63720ee7dc39354c3"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
              <div className="card">
                <img
                  src={imgBahia}
                  className="card-img-top"
                  alt={variables.altImg}
                />
                <div className="card-body">
                  {/* <h6 className='card-title'>{variables.tituloImagenes}</h6> */}

                  <div className="fecha-hora">
                    <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Fecha:</span>
                    <span className="ms-1">25 de agosto</span>
                  </div>

                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Hora:</span>
                    <span className="ms-1">21:00hs</span>
                  </div>
                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Lugar: </span>
                    <span className="ms-1">Bahía Blanca</span>
                  </div>

                  <a
                    className="btn btn-primary btn-color mt-4"
                    rel="noreferrer"
                    target="_blank"
                    href="https://entradauno.com/11722-ciro-y-los-persas/estadio-club-estudiantes/funcion/26468/?h=b51fb0c0e538c395bd484ef49f6367ec405095d2"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
              <div className="card">
                <img
                  src={imgNeuquen}
                  className="card-img-top"
                  alt={variables.altImg}
                />
                <div className="card-body">
                  {/* <h6 className='card-title'>{variables.tituloImagenes}</h6> */}

                  <div className="fecha-hora">
                    <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Fecha:</span>
                    <span className="ms-1">27 de agosto</span>
                  </div>

                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Hora:</span>
                    <span className="ms-1">21:00hs</span>
                  </div>
                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Lugar: </span>
                    <span className="ms-1">Neuquén</span>
                  </div>

                  <a
                    className="btn btn-primary btn-color mt-4"
                    rel="noreferrer"
                    target="_blank"
                    href="https://entradauno.com/11722-ciro-y-los-persas/estadio-ruca-che/funcion/26397/?h=4503da90d325831d4a0924de2071d7ad5d40657c"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-2 mb-2">
              <div className="card">
                <img
                  src={imgBariloche}
                  className="card-img-top"
                  alt={variables.altImg}
                />
                <div className="card-body">
                  {/* <h6 className='card-title'>{variables.tituloImagenes}</h6> */}

                  <div className="fecha-hora">
                    <i className="bi bi-calendar2-check-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Fecha:</span>
                    <span className="ms-1">28 de agosto</span>
                  </div>

                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Hora:</span>
                    <span className="ms-1">21:00hs</span>
                  </div>
                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Lugar: </span>
                    <span className="ms-1">Bariloche</span>
                  </div>

                  <a
                    className="btn btn-primary btn-color mt-4"
                    rel="noreferrer"
                    target="_blank"
                    href="https://entradauno.com/11722-ciro-y-los-persas/estadio-bomberos-voluntarios/funcion/26399/?h=79eb1382708c85fa2b0aa310eb468108b7708542"
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
                    <span className="ms-1">9 de septiembre</span>
                  </div>

                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Hora:</span>
                    <span className="ms-1">21:00hs</span>
                  </div>
                  <div className="fecha-hora mt-1">
                    <i className="bi bi-clock-fill color-icono me-2"></i>
                    <span className="fecha-hora__color-texto">Lugar: </span>
                    <span className="ms-1">Córdoba</span>
                  </div>

                  <a
                    className="btn btn-primary btn-color mt-4"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.edenentradas.com.ar/sitio/contenido/evento?ce=SHOW001215"
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
                    <span className="ms-1">1 de octubre</span>
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
                    <span className="ms-1">22 de octubre</span>
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Eventos;
