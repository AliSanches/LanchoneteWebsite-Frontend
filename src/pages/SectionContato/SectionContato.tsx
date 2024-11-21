import logo from "/public/logo-kero.png";
import onda from "/public/ondas.png";

import Nav from "react-bootstrap/Nav";

export const SectionContato = () => {
  return (
    <div className="container-lg">
      <div className="container d-flex gap-3 flex-column flex-lg-row justify-content-lg-between gap-lg-5">
        <div style={{ width: "260px" }}>
          <img src={logo} alt={logo} style={{ width: "150px" }} />
          <p className="fs-6 text-secondary my-4">
            A lanchonete mais temática de Piracicaba, com uma receita deliciosa
            de hamburger que acompanha a família há quatro gerações e que atrai
            fregueses pelo aroma.
          </p>
        </div>

        <div style={{ width: "260px" }}>
          <h2 className="mt-3 mb-0 fw-bold text-black">LINKS</h2>

          <img src={onda} style={{ width: "26px" }} />

          <div className="d-flex flex-column gap-3 my-3">
            <Nav.Link href="#action1" className="border-bottom">
              INICIO
            </Nav.Link>
            <Nav.Link href="#action1" className="border-bottom">
              CARDÁPIO
            </Nav.Link>
            <Nav.Link href="#action1" className="border-bottom">
              HORÁRIOS
            </Nav.Link>
            <Nav.Link href="#action1">CONTATO</Nav.Link>
          </div>
        </div>

        <div style={{ width: "260px" }}>
          <h2 className="mt-3 mb-0 fw-bold text-black">FUNCIONAMENTO</h2>

          <img src={onda} style={{ width: "26px" }} />

          <div className="fs-6 my-3">
            <p>
              <strong>Segunda a Sexta:</strong> 10h30 as 22h
              <br />
              <strong>Sábados:</strong> 10h30 as 14h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
