import React, { Component } from 'react';
import './LogoutButton.css'
import { Button } from 'react-bootstrap';


export default class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: this.props.isAuthenticated
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.Logout();
    }

    render() {
        return (
            <Button className={'btn btn-default'} onClick={this.handleLogout}>
                Logout
            </Button>
        )
    }
}