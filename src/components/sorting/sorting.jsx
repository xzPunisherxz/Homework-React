import React from "react";

import { observer } from "mobx-react-lite";
import { events } from "../../store/index";
import { action } from "mobx";

const Sorting = observer (() => {
  
  const { filtredData } = events

  const handleSort = action ((e) => {
      const order = e.target.value
    if(order === "1") {
     
      events.filtredData = [...events.filtredData.sort((a,b) => {
        
        return new Date(a.date) - new Date(b.date)
      })]    
    } else if(order === "-1") {
      events.filtredData = [...events.filtredData.sort((a,b) => {
        
        return new Date(b.date) - new Date(a.date)
      })]    
    } else {
      events.filtredData = [...events.filtredData.sort((a,b) => {
        
        return new Date(a.date) - new Date(b.date)
      })]

    }
  })
  
  return (
    <div className="board__filter-list">
      <span className="board__filter--title">Сортировка:</span>
      <input
        type="radio"
        id="board__filter-default"
        className="board__filter visually-hidden"
        name="board-filter"
        defaultChecked
        value="0"
        onChange={handleSort}
      />
      <label htmlFor="board__filter-default" className="board__filter-label">
        По умолчанию
      </label>
      <input
        type="radio"
        id="board__filter-new"
        className="board__filter visually-hidden"
        name="board-filter"
        value="1"
        onChange={handleSort}
        
      />
      <label htmlFor="board__filter-new" className="board__filter-label">
        Сначала новые
      </label>
      <input
        type="radio"
        id="board__filter-old"
        className="board__filter visually-hidden"
        name="board-filter"
        value="-1"
        onChange={handleSort} 
       />
      <label htmlFor="board__filter-old" className="board__filter-label">
        Сначала старые
      </label>
    </div>
  );
})

export default Sorting;
