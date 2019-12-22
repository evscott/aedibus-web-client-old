import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

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
                    <Link to="/login" className="btn btn-link">
                        Login
                    </Link>
                </div>
            </div>
        );
    }
}