import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import { AppRoute } from "../../const";

const Archive = (location) => {
  return (
    <>
      <Header location={window.location.pathname} />
      <section className="main__wrapper">
        <Board />
      </section>
    </>
  );
};

export default Archive;
