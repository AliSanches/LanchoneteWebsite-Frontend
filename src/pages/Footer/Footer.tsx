import Stack from "react-bootstrap/Stack";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="container-lg">
      <Stack
        direction="horizontal"
        className="align-items-center d-flex"
        gap={3}
        style={{ height: "70px" }}
      >
        <div className="p-2 text-white">© KerLanches</div>
        <div className="p-2 ms-auto d-flex gap-2 fs-3">
          <a href="#" className="link-nav-sociais">
            <FaInstagram />
          </a>
          <a href="#" className="link-nav-sociais">
            <FaFacebook />
          </a>
        </div>
      </Stack>
    </div>
  );
};
