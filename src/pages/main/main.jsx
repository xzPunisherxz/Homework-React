import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";
import { AppRoute } from "../../const.js";
import NoEvents from "../../components/no-events/no-events";

const Main = (location) => {
  return (
    <>
      <Header location={window.location.pathname} />
      <section className="main__wrapper">
        <Filter location={window.location.pathname} />
        <Board location={window.location.pathname} />
      </section>
    </>
  );
};

export default Main;
