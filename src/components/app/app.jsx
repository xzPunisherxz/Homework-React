import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import { AppRoute } from "../../const";
import Form from "../../pages/form/form";
import Edit from "../edit/edit";
import Page404 from "../../pages/page404/page404";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact component={Main} />
        <Route path={AppRoute.ARCHIVE} exact component={Archive} />
        <Route path={AppRoute.ADD} exact component={Form} />
        <Route path={AppRoute.NOTFOUND} exact component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
