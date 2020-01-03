import React, { Component } from 'react'
import { ListGroup } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import './AssignmentList.css'

export default class AssignmentList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(target) {
        this.setState({assignment: target});
    }

    render() {
        if (this.state.assignment) {
            return <Redirect to={{
                pathname: `/assignment`,
                state: {assignment: this.state.assignment}
            }} />
        }
        return (
            <ListGroup defaultActiveKey="#link1">
                {
                    this.props.assignments.map(a =>
                        <ListGroup.Item key={a.id} name={a.name} action onClick={() => this.handleClick(a)}>
                            {a.name}
                        </ListGroup.Item>)
                }
            </ListGroup>
        )
    }
}

AssignmentList.propTypes = {
};