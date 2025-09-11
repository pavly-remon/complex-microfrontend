import React from "react";
import {Switch, Route, BrowserRouter } from "react-router-dom";
import {StylesProvider} from "@material-ui/core/styles";

import Landing from "./components/Landing"
import Pricing from "./components/Pricing"

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch exact path="/pricing" component={Pricing}/>
          <Switch path="/" component={Landing}/>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
