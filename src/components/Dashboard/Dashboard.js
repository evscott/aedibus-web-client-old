import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import './Dashboard.css'
import AssignmentListContainer from "./AssignmentList/AssignmentListContainer";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleAssignmentClick = this.handleAssignmentClick.bind(this);
    }

    componentDidMount() {
        this.props.GetAssignments();
    }

    handleAssignmentClick(assignment) {
        if (this.props.firstName === "teacher")
            this.props.history.push({
                pathname: '/assignment/teacher',
                state: {
                    assignment: assignment,
                }
            });
        else
            this.props.history.push({
                pathname: '/assignment/student',
                state: {
                    assignment: assignment,
                    firstName: this.props.firstName,
                    lastName: this.props.lastName,
                }
            });
    }

    render() {
        return (
            <div className={'width-half position-middle'}>
                <AssignmentListContainer handleAssignmentClick={this.handleAssignmentClick}/>
            </div>
        )
    }
}

export default withRouter(Dashboard);
