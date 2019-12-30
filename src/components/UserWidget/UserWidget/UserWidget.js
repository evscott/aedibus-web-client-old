import React, { Component } from 'react'
import './UserWidget.css'
import LogoutButtonContainer from "../LogoutButton/LogoutButtonContainer";

export default class UserWidget extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                { this.props.isAuthenticated ? <LogoutButtonContainer/> : null }
            </div>
        )
    }
}

UserWidget.propTypes = {
};