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
        let path;
        if (this.props.firstName === "teacher")
            path = '/assignment/teacher';
        else
            path = '/assignment/student';


        this.props.history.push({
            pathname: path,
            state: {
                assignment: assignment,
            }
        });
    }

    render() {
        return (
            <div className={'width-half position-middle'}>
                <h3>
                    <span> Assignments </span>
                </h3>
                <AssignmentListContainer handleAssignmentClick={this.handleAssignmentClick}/>
            </div>
        )
    }
}

export default withRouter(Dashboard);
