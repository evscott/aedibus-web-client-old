import React, {Component} from "react";
import { Redirect } from 'react-router-dom';
import './Dashboard.css'
import AssignmentListContainer from "../../Assignment/AssignmentList/AssignmentListContainer";
import LogoutButtonContainer from "../../Authentication/LogoutButton/LogoutButtonContainer";

export default class Dashboard extends Component {
    render() {
            if (!this.props.isAuthenticated && !this.props.isFetching)
                return <Redirect to="/" />;
            else return (
                        <div>
                            <h1 className={'center-text'}> Hello, { this.props.firstName } { this.props.lastName }. </h1>
                            <AssignmentListContainer/>
                            <LogoutButtonContainer/>
                        </div>
                );
    }
}