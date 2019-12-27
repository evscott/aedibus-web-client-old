import React, { Component } from 'react';
import './LandingPage.css';
import LoginFormContainer from "../Auth/Login/LoginFormContainer";

export default class Home extends Component {
    render() {
        return (
            <div className="landing">
                <div className="title">
                    <h1>
                        <span className="red">aedibus</span>
                    </h1>
                </div>
                <div className="flex-wrap-center">
                    <LoginFormContainer/>
                </div>
            </div>
        );
    }
}