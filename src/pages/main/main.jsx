import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";
import NoEvents from "../../components/no-events/no-events";
import { events } from "../../store/index";
import { observer } from "mobx-react-lite";


const Main = observer (( location) => {
  
const { filtredData } = events


  return (
    <>
      <Header location={window.location.pathname} />
      <section className="main__wrapper">
        <Filter location={window.location.pathname} />
        <Board events={filtredData} location={window.location.pathname} />
      </section>
    </>
  );
})

export default Main;
