import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { SectionCardapio } from "../SectionCardapio/SectionCardapio";

import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <main className="container-fluid wpp-main z-0">
        <Main />
      </main>
      <section className="container-fluid" style={{ height: "80vh" }}>
        <SectionCardapio />
      </section>
    </>
  );
};
