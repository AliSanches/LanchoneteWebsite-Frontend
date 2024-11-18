import { useState } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";

import { IoMenu } from "react-icons/io5";

import "./Header.css";

export const BtnMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-sm-block d-md-none">
      <Button variant="danger" onClick={handleShow} className="me-2 fs-5">
        <IoMenu />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className="text-danger">Ker </span>Lanches
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-column pe-3">
            <Nav.Link href="#action1" className="nav-linksNav">
              Inicio
            </Nav.Link>
            <Nav.Link href="#action2" className="nav-linksNav">
              Cardapio
            </Nav.Link>
            <Nav.Link href="#action1" className="nav-linksNav">
              Horários
            </Nav.Link>
            <Nav.Link href="#action2" className="nav-linksNav">
              Contato
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
