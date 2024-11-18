import "./Main.css";

export const Main = () => {
  return (
    <div
      className="container-lg d-flex align-items-center justify-content-center"
      style={{ height: "70vh" }}
    >
      <div className="container text-white text-center my-5 d-flex flex-column conteudo-width">
        <div className="container text-uppercase fw-bold">
          <h1>A lanchonete mais temática de piracicaba</h1>
        </div>

        <div className="container my-3">
          <span>
            Um ambiente agradável, simpatia no atendimento e amor naquilo que
            fazemos. Venha nos conhecer!
          </span>
        </div>

        <div
          className="container my-3 d-flex gap-4 flex-column"
          style={{ width: "180px" }}
        >
          <button className="btn btn-danger shadow-sm">Cardápio</button>
          <button className="btn btn-danger shadow-sm">Peça Online</button>
        </div>
      </div>
    </div>
  );
};
