import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LandingPageContainer from "./LandingPage/LandingPage/LandingPageContainer";
import DashboardContainer from "./Dashboard/DashboardContainer";
import AssignmentContainer from "./Assignment/AssignmentContainer";

const AuthenticatedRoute = ({ component: Component, ...rest}) => {
    return <Route
        {...rest}
        render={props => localStorage.getItem("token") ? <Component {...props}/> : <Redirect to={'/'}/>}
    />
};

export default () => (
    <Router>
        <Switch>
            <Route exact path={"/"} component={LandingPageContainer}/>
            <AuthenticatedRoute exact path={"/home"} component={DashboardContainer}/>
            <AuthenticatedRoute exact path={'/a/:aid'} component={AssignmentContainer}/>
        </Switch>
    </Router>
);