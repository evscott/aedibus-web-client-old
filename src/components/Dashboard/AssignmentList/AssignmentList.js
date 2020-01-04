import React, { Component } from 'react'
import {Button, ListGroup} from "react-bootstrap";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './AssignmentList.css'

class AssignmentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assignments: [],
        };

        this.handleCreateAssignment = this.handleCreateAssignment.bind(this);
        this.handleAssignmentClick = this.handleAssignmentClick.bind(this);
    }

    handleCreateAssignment() {
        this.props.history.push('/assigment/create');
    }

    handleAssignmentClick(assignment) {
        if (this.props.firstName === "Eliot") {
            this.props.toggleListForward(assignment);
        }

        if (this.props.firstName !== "Eliot")
            this.props.history.push({
                pathname: `/assignment`,
                state: {
                    assignment: assignment,
                    firstName: this.props.firstName,
                    lastName: this.props.lastName,
                }
            });
    }

    render() {
        return (
            <div>
                <ListGroup defaultActiveKey="#link1">
                    {
                        this.props.assignments.map(a =>
                            <ListGroup.Item key={a.id} name={a.name} action onClick={() => this.handleAssignmentClick(a)}>
                                {a.name}
                            </ListGroup.Item>)
                    }
                </ListGroup>
                <div className={'float-right padding-top-sm'}>
                    <Button className={'btn-success'} onClick={this.handleCreateAssignment}>+</Button>
                </div>
            </div>
        )
    }
}

AssignmentList.propTypes = {
    toggleListForward: PropTypes.func.isRequired,
};

export default withRouter(AssignmentList);