import React from "react";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";

const FilterButton = ({ location }) => {
  if (location === AppRoute.MAIN) {
    return (
      <Link to="/event" name="control" className="btn-add">
        Создать
      </Link>
    );
  }
};

export default FilterButton;
