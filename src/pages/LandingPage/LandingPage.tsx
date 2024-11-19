import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { SectionCardapio } from "../SectionCardapio/SectionCardapio";
import { SectionHorario } from "../SectionHorario/SectionHorario";

import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <main className="container-fluid wpp-main z-0">
        <Main />
      </main>
      <section className="container-fluid  wpp-section-cardapio">
        <SectionCardapio />
      </section>
      <section className="container-fluid wpp-section-horarios">
        <SectionHorario />
      </section>
    </>
  );
};
