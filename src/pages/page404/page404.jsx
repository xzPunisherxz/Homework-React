import React from "react";
import { Link } from "react-router-dom";
import "../page404/page404.css";

const Page404 = () => {
  return (
    <>
      <div className="over"></div>
      <div className="fzf">404</div>
      <div className="notfound">
        страница не найдена
        <br />
        <Link to="/"> перейти на главную страницу..</Link>
      </div>
    </>
  );
};

export default Page404;
