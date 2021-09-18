import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginWrapper from "../components/Login/LoginWrapper";
import AddPatients from "../pages/AddPatients";
import Users from "../pages/Users";
import ChoosePlan from "./../pages/ChoosePlan";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <LoginWrapper />
          </Route>
          <Route path="/addPatients" exact>
            <AddPatients />
          </Route>
          <Route path="/choosePlan" exact>
            <ChoosePlan />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
