import React, { Component } from 'react';
import UserWidgetContainer from "../../UserWidget/UserWidget/UserWidgetContainer";

export default class Header extends Component {


    render() {
        return (
            <div className="title">
                <h1>
                    <span className="red">aedibus</span>
                </h1>
                <UserWidgetContainer/>
            </div>
        );
    }
}