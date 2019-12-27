import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './LandingPage.css';
import LoginFormContainer from "../Auth/LoginForm/LoginFormContainer";

export default class LandingPage extends Component {
    render() {
        if (this.props.isAuthenticated && !this.props.isFetching)
            return <Redirect to="/home"/>;
        else return (
                    <div className="flex-wrap-center">
                        <LoginFormContainer/>
                    </div>
            );
    }
}