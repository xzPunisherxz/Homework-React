import React from "react";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import DeleteArchive from "../deletearchive/deletearchive";
import Sorting from "../sorting/sorting";
import { AppRoute } from "../../const";

const Board = ({events, location} ) => {
  const [step, setStep] = React.useState(5);
  

  const handleLoadMore = () => {
    events.length >= step ? setStep(step + 1) : setStep(events.length);
  }
  if (location === AppRoute.MAIN) {
   
    return (
      <section className="board">
        <Sorting />
        <div className="board__events">       
        {events.slice(0, step).map(event => <Card {...event} key={event._id}/>)}
          
        </div>
        <LoadMore handleLoadMore={handleLoadMore}/>
        
      </section>
    );
  } else {
    
    return (
      <section className="board">
        <div className="board__events">
        {events.slice(0, step).map(event => <Card {...event} key={event._id}/>)}
        
        </div>
        <DeleteArchive/>
        <LoadMore handleLoadMore={handleLoadMore}/>
      </section>
    )
  }
};

export default Board;



