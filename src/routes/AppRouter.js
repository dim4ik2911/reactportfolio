import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "../components/Main";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Navigation from "../components/Navigation";

const AppRouter = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
