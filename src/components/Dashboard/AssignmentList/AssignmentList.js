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

    handleClick(e) {
        e.preventDefault();
        this.setState({assignment: e.target.name});
    }

    render() {
        if (this.state.assignment) {
            return <Redirect to={`/a/${this.state.assignment}`} />
        }
        return (
            <ListGroup defaultActiveKey="#link1">
                <div>
                    {this.props.assignments.map(a => <ListGroup.Item key={a.id} name={a.name} action onClick={this.handleClick}> {a.name} </ListGroup.Item>)}
                </div>
            </ListGroup>
        )
    }
}

AssignmentList.propTypes = {
};