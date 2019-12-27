import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPageContainer from "./AuthComponents/LandingPage/LandingPageContainer";
import DashboardContainer from "./HomeComponents/Dashboard/DashboardContainer";

export default () => (
    <Router>
        <Switch>
            <Route exact path={"/"} component={LandingPageContainer}/>
            <Route exact path={"/home"} component={DashboardContainer}/>
        </Switch>
    </Router>
);