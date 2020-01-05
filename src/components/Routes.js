import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LandingPageContainer from "./LandingPage/LandingPageContainer";
import DashboardContainer from "./Dashboard/DashboardContainer";
import StudentAssignmentContainer from "./Assignment/StudentAssignment/StudentAssignmentContainer";
import TeacherAssignmentContainer from "./Assignment/TeacherAssignment/TeacherAssignmentContainer";
import CreateAssignmentContainer from "./CreateAssignment/CreateAssignmentContainer";

const AuthenticatedRoute = ({ component: Component, ...rest}) => {
    return <Route
        {...rest}
        render={props => localStorage.getItem("token") ? <Component {...props}/> : <Redirect to={'/'}/>}
    />
};

export default () => (
    <Switch>
        <Route exact path={"/"} component={LandingPageContainer}/>
        <AuthenticatedRoute exact path={"/home"} component={DashboardContainer}/>
        <AuthenticatedRoute exact path={'/assignment/student'} component={StudentAssignmentContainer}/>
        <AuthenticatedRoute exact path={'/assignment/teacher'} component={TeacherAssignmentContainer}/>
        <AuthenticatedRoute exact path={"/assigment/create"} component={CreateAssignmentContainer}/>
    </Switch>
);