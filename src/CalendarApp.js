import React from "react";
import { LoginScreen } from "./components/auth/LoginScreen";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { CalendarScreen } from "./components/calendar/CalendarScreen";

export const CalendarApp = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component={CalendarScreen} />

          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  );
};
