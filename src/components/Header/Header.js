import React, { Component } from 'react';
import './Header.css'
import UserWidgetContainer from "../UserWidget/UserWidgetContainer";

export default class Header extends Component {
    render() {
        return (
            <div className="title">
                <h1 className={'display-inline'}>
                    <span className="red">aedibus</span>
                </h1>
                <div className={'display-inline float-right'}>
                    <UserWidgetContainer/>
                </div>
            </div>
        );
    }
}