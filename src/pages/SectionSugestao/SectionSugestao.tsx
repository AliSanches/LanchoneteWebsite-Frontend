import onda from "/public/ondas.png";

import Form from "react-bootstrap/Form";

import logo from "/public/Disk.png";

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
        <div className="container-fluid justify-content-center bg-body-secondary">
          <div className="my-5">
            <img src={logo} alt={logo} style={{ width: "240px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
