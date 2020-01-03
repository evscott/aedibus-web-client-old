import React, {Component} from "react";
import './Dashboard.css'
import AssignmentListContainer from "./AssignmentList/AssignmentListContainer";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <AssignmentListContainer/>
            </div>
        );
    }

}