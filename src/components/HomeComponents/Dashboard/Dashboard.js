import React, {Component} from "react";
import { Redirect } from 'react-router-dom';
import LogoutButtonContainer from "../../AuthComponents/LogoutButton/LogoutButtonContainer";

export default class Dashboard extends Component {
    render() {
            if (!this.props.isAuthenticated && !this.props.isFetching)
                return <Redirect to="/" />;
            else return (
                        <div>
                            <h1> Hello, { this.props.firstName } { this.props.lastName }. </h1>
                            <LogoutButtonContainer/>
                        </div>
                );
    }
}