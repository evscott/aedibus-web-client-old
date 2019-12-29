import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPageContainer from "./Authentication/LandingPage/LandingPageContainer";
import DashboardContainer from "./Dashboard/Dashboard/DashboardContainer";

export default () => (
    <Router>
        <Switch>
            <Route exact path={"/"} component={LandingPageContainer}/>
            <Route exact path={"/home"} component={DashboardContainer}/>
        </Switch>
    </Router>
);