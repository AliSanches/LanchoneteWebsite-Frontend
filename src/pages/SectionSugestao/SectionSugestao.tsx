import onda from "/public/ondas.png";

import Form from "react-bootstrap/Form";

import logo from "/public/Disk.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import "./SectionSugestao.css";

export const SectionSugestao = () => {
  return (
    <div className="container-lg">
      <div className="container bg-light px-0 my-5 d-flex flex-column flex-lg-row">
        <div className="container text-initial text-secondary">
          <div className="mb-2">
            <h2 className="mt-3 mb-0 fw-bold text-black">SUGESTÕES</h2>

            <img src={onda} style={{ width: "26px" }} />
          </div>

          <span className="fs-6">
            Não aceitamos pedidos por e-mail, apenas por telefone.
          </span>

          <Form className="d-flex flex-column gap-4 my-4">
            <Form.Control size="sm" type="text" placeholder="Nome" />
            <Form.Control size="sm" type="text" placeholder="Email" />
            <Form.Control size="sm" type="text" placeholder="Telefone" />
            <Form.Control as="textarea" rows={3} />

            <div className="text-initial">
              <button className="btn btn-danger">ENVIAR</button>
            </div>
          </Form>
        </div>
        <div className="container container-direita-section-sugestao justify-content-center bg-body-secondary d-lg-flex flex-lg-column align-items-center">
          <div>
            <div className="my-5">
              <img src={logo} alt={logo} style={{ width: "240px" }} />
            </div>
            <div className="d-flex gap-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="2xl"
                style={{ color: "#f82020" }}
              />
              <h2 className="fw-bold">ENDEREÇO</h2>
            </div>

            <div className="text-secondary mb-5 mt-2">
              R. Morais Barros, 654
              <br />
              Centro, Piracicaba – SP
              <br />
              CEP 13400-353
            </div>

            <div className="d-flex gap-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2xl"
                style={{ color: "#f82020" }}
              />
              <h2 className="fw-bold">E-MAIL</h2>
            </div>

            <div className="text-secondary mb-5 mt-2">
              kerolanches@gmail.com
            </div>

            <div className="d-flex gap-2">
              <FontAwesomeIcon
                icon={faPhone}
                size="2xl"
                style={{ color: "#f82020" }}
              />
              <h2 className="fw-bold">TELEFONE</h2>
            </div>

            <div className="text-secondary mb-5 mt-2">19 3422-0697</div>
          </div>
        </div>
      </div>
    </div>
  );
};
