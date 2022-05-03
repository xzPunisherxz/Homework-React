import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import { useLocation } from "react-router-dom";
import { events } from "../../store/index";
import { observer } from "mobx-react-lite";

const Archive = observer (() => {  
  const { pathname } = useLocation();

  const { archiveData } = events;
  
 

  return (
    <>
      <Header location={pathname} />
      <section className="main__wrapper">
        <Board location={window.location.pathname} events={archiveData}/>
      </section>
    </>
  );
})

export default Archive;
