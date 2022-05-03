import React from "react";
import Filter from "../../components/filter/filter";
import Header from "../../components/header/header";
import Event from "../../components/event/event";
import { observer } from "mobx-react-lite";
import { events } from "../../store/index";
import { useParams } from "react-router-dom";


const Form = observer (() => {
  const { id } = useParams();
  const { data } = events;
  const event = data.find(element => element._id === id);
      
  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Filter />
        <Event  {...event} />
      </section>
    </>
  );
})

export default Form;
