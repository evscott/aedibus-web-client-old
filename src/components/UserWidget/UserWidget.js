import React, { Component } from 'react'
import './UserWidget.css'
import LogoutButtonContainer from "./LogoutButton/LogoutButtonContainer";

export default class UserWidget extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        if (this.props.isAuthenticated)
            return (
                <div>
                    <span> {this.props.firstName} {this.props.lastName} </span>
                    <LogoutButtonContainer/>
                </div>
            );
        else
            return (<div/>)
    }
}

UserWidget.propTypes = {
};