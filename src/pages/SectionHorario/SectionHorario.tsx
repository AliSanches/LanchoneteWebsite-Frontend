import horarios from "/public/Horario-Kero_site.png";

import "./SectionHorario.css";

export const SectionHorario = () => {
  return (
    <div className="container-lg d-flex justify-content-center ">
      <img src={horarios} alt={horarios} className="wpp-horario" />
    </div>
  );
};
