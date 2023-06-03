import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../../pages/home";
import Users from "../../pages/users";
import Graph from "../../pages/graph";
import Profil from "../../pages/profil";


const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Graph} />
        <Route path="/dashboard" exact component={Home} />
        <Route path="/users" exact component={Users} />
        <Route path="/login" exact component={Profil} />
        <Redirect to="/dashboard" />
      </Switch>
    </Router>
  );
};

export default index;
