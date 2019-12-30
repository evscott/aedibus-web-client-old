import React, {Component} from "react";
import './Dashboard.css'
import AssignmentListContainer from "./AssignmentList/AssignmentListContainer";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1 className={'center-text'}> Hello, { this.props.firstName } { this.props.lastName }. </h1>
                <AssignmentListContainer/>
            </div>
        );
    }

}