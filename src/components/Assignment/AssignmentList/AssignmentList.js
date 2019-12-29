import React, { Component } from 'react'
import { ListGroup } from "react-bootstrap";
import './AssignmentList.css'

export default class AssignmentList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(e.target.name);
    }

    render() {
        return (
            <ListGroup defaultActiveKey="#link1">
                <div>
                    {this.props.assignments.map(a => <ListGroup.Item key={a.id} name={a.title} action onClick={this.handleClick}> {a.title} </ListGroup.Item>)}
                </div>
            </ListGroup>
        )
    }
}

AssignmentList.propTypes = {
};