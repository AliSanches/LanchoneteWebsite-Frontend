import Stack from "react-bootstrap/Stack";
import Nav from "react-bootstrap/Nav";

import "./Header.css";

import logo from "/public/logo-kero.png";

import { BtnMenu } from "../Header/BtnMenu";

export const Header = () => {
  return (
    <header className="container-fluid z-5 bg-light sticky-top shadow-md align-items-center ">
      <Stack
        direction="horizontal"
        style={{ height: "100px" }}
        className="container-lg"
        gap={3}
      >
        <div className="p-2">
          <img
            src={logo}
            alt={logo}
            style={{ width: "130px", height: "70px" }}
          />
        </div>
        <nav className="p-2 ms-auto">
          <Nav
            className="me-auto  my-2 my-lg-0 d-none d-md-flex "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="nav-linksNav">
              Inicio
            </Nav.Link>
            <Nav.Link href="#action2" className="nav-linksNav">
              Cardapio
            </Nav.Link>
            <Nav.Link href="#" className="nav-linksNav">
              Horários
            </Nav.Link>
            <Nav.Link href="#" className="nav-linksNav">
              Contato
            </Nav.Link>
          </Nav>
          <BtnMenu />
        </nav>
      </Stack>
    </header>
  );
};
