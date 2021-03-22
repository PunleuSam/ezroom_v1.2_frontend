import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import header from "./components/home/Header/header";
import footer from "./components/home/Footer/footer";
import login from "./components/home/Login/login";
import register from "./components/home/Register/register";
import body from "./components/home/Body/body";
import content from "./components/home/Content/content";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/home" component={header} />
        <Route extact path="/body" component={ body } />
        <Route extact path="/home" component={ content } />
        <Route exact path="/home" component={footer} />
        <Switch>
          <Route exact path="/login" component={login} />
          <Route exact path="/register" component={register} />
          
          <Route />
        </Switch>
      </Router>
    );
  }
}

export default App;
