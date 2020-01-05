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
        this.showCreateAssignment = this.showCreateAssignment.bind(this);
    }

    handleCreateAssignment() {
        this.props.history.push('/assigment/create');
    }

    showCreateAssignment() {
        if (this.props.firstName === "teacher")
            return (
                <div className={'float-right padding-top-sm'}>
                    <Button className={'btn-success'} onClick={this.handleCreateAssignment}>+</Button>
                </div>
            )
    }

    render() {
        return (
            <div>
                <ListGroup defaultActiveKey="#link1">
                    {
                        this.props.assignments.map(a =>
                            <ListGroup.Item key={a.id} name={a.name} action onClick={() => this.props.handleAssignmentClick(a)}>
                                {a.name}
                            </ListGroup.Item>)
                    }
                </ListGroup>
                { this.showCreateAssignment() }
            </div>
        )
    }
}

AssignmentList.propTypes = {
    handleAssignmentClick: PropTypes.func.isRequired,
};

export default withRouter(AssignmentList);