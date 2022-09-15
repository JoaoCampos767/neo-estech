import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Table from "./pages/Table/index";
import Chart from "./pages/Chart/index";
import Card from "./pages/Card/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Table} path="/" exact/>
    </BrowserRouter>
  );
};

export default Routes;

/*
      <Route component={Chart} path="/chart" />
      <Route component={Card} path="/card" />
*/
