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
        this.setState({aid: e.target.name});
    }

    render() {
        if (this.state.aid) {
            return <Redirect to={`/a/${this.state.aid}`} />
        }
        return (
            <ListGroup defaultActiveKey="#link1">
                <div>
                    {this.props.assignments.map(a => <ListGroup.Item key={a.id} name={a.id} action onClick={this.handleClick}> {a.title} </ListGroup.Item>)}
                </div>
            </ListGroup>
        )
    }
}

AssignmentList.propTypes = {
};