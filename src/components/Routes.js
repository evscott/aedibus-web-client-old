import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPageContainer from "./LandingPage/LandingPageContainer";
import DashboardContainer from "./Dashboard/DashboardContainer";

export default () => (
    <Router>
        <Switch>
            <Route exact path={"/"} component={LandingPageContainer}/>
            <Route exact path={"/home"} component={DashboardContainer}/>
        </Switch>
    </Router>
);