import React from "react";
import Filter from "../../components/filter/filter";
import Header from "../../components/header/header";
import Event from "../../components/event/event";

const Form = (props) => {
  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Filter />
        <Event props={props} />
      </section>
    </>
  );
};

export default Form;
