import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import { AppRoute } from "../../const";
import Form from "../../pages/form/form";
import Page404 from "../../pages/page404/page404";
import { events } from "../../store/index";



const App = () => {


  return (
    <BrowserRouter>
      <Switch>
         <Route path="/" exact>
           <Main />
           </Route> 
          <Route path="/archive" exact>
          <Archive />
           </Route> 
        <Route path={AppRoute.ADD} exact component={Form} />
        <Route path={AppRoute.EVENT} exact component={Form} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
