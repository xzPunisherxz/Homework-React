import React from "react";
import FilterButton from "../filter-button/filter-button";
import { observer } from "mobx-react-lite";
import { events } from "../../store/index";
import { action } from "mobx";

const Filter = observer(({ location }) => {

  const {
    notArchiveData,
    pastData,
    todayData,
    futureData,
    favoriteData
  } = events;

  const handleFiltred = action((e) => {
    events.filtredData = events[e.target.value]
  })
  
  return (
    <section className="main__filter filter">
      <input
        type="radio"
        id="filter__all"
        className="filter__input visually-hidden"
        name="filter"
        value={"notArchiveData"}
        disabled={!notArchiveData.length}
        onChange={handleFiltred}
      />
      <label htmlFor="filter__all" className="filter__label">
        Все <span className="filter__all-count count">{notArchiveData.length}</span>
      </label>
      <input
        type="radio"
        id="filter__overdue"
        className="filter__input visually-hidden"
        name="filter"
        value={"pastData"}
        disabled={!pastData.length}
        onChange={handleFiltred}
      />
      <label htmlFor="filter__overdue" className="filter__label">
        Прошедшие <span className="filter__overdue-count count">{pastData.length}</span>
      </label>
      <input
        type="radio"
        id="filter__today"
        className="filter__input visually-hidden"
        name="filter"
        value={"todayData"}
        disabled={!todayData.length}
        onChange={handleFiltred}
      />
      <label htmlFor="filter__today" className="filter__label">
        Сегодня <span className="filter__today-count count">{todayData.length}</span>
      </label>
      <input
        type="radio"
        id="filter__future"
        className="filter__input visually-hidden"
        name="filter"
        value={"futureData"}
        disabled={!futureData.length}
        onChange={handleFiltred}
      />
      <label htmlFor="filter__future" className="filter__label">
        Будущие <span className="filter__future-count count">{futureData.length}</span>
      </label>
      <input
        type="radio"
        id="filter__favorite"
        className="filter__input visually-hidden"
        name="filter"
        value={"favoriteData"}
        disabled={!favoriteData.length}
        onChange={handleFiltred}
      />
      <label htmlFor="filter__favorite" className="filter__label">
        Избранное <span className="filter__favorite-count count">{favoriteData.length}</span>
      </label>
      <FilterButton location={location} />
    </section>
  );
})

export default Filter;
