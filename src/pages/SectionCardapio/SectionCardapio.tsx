import "./SectionCardapio.css";

import onda from "/public/ondas.png";

export const SectionCardapio = () => {
  return (
    <section className="container-lg">
      <div className="container bg-light px-0 section-Cardapio d-flex flex-column flex-lg-row">
        <div className="container text-initial text-secondary">
          <div className="mb-2">
            <h2 className="mt-3 mb-0 fw-bold text-black">QUEM SOMOS</h2>

            <img src={onda} style={{ width: "26px" }} />
          </div>

          <p>
            Um ambiente agradável, simpatia no atendimento e amor naquilo que
            fazem.
          </p>

          <p>
            Um ambiente agradável, simpatia no atendimento e amor naquilo que
            fazem.
          </p>

          <p>Todos esses ingredientes incrementam a receita do sucesso.</p>

          <div className="container d-flex justify-content-center my-5">
            <button className="btn btn-danger">Nosso Cardápio</button>
          </div>
        </div>
        <div className="container-fluid wpp-lanchonete"></div>
      </div>
    </section>
  );
};
