import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./components/home/home";
import login from "./components/home/login";
import register from "./components/home/register";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={home} />
          <Route exact path="/login" component={login} />
          <Route exact path="/register" component={register} />
          <Route />
        </Switch>
      </Router>
    );
  }
}

export default App;
