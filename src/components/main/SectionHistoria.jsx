import React from "react";
import { VariablesContext } from "../../context/VariablesProvider";

const SectionHistoria = () => {
  const { variables } = React.useContext(VariablesContext);

  return (
    <>
      <section id="about">
        <div className="container about-container wow fadeInUp">
          <div className="row">
            <div className="col-12 col-lg-6 about-img mb-2 mb-lg-0">
              <img src={variables.imagenHistoria} alt={variables.venueName} />
            </div>

            <div className="col-12 col-lg-6 about-content">
              <p className="about-text">{variables.descripcion1}</p>

              <p className="about-text">{variables.descripcion2}</p>
            </div>
          </div>
        </div>
        {/* <div className="section-title-divider mt-4"></div> */}
      </section>
    </>
  );
};

export default SectionHistoria;
