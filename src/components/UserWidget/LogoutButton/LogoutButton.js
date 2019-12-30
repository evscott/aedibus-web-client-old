import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './LogoutButton.css'
import { Button } from 'react-bootstrap';

class LogoutButton extends Component {
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
        this.props.history.push('/');
    }

    render() {
        return (
            <Button className={'btn btn-default'} onClick={this.handleLogout}>
                Logout
            </Button>
        )
    }
}

export default withRouter(LogoutButton)