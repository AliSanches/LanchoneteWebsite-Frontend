import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <main className="container-fluid wpp-main z-0">
        <Main />
      </main>
    </>
  );
};
