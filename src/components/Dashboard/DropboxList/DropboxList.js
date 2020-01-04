import React, { Component } from 'react'
import { ListGroup } from "react-bootstrap";
import './DropboxList.css'

export default class DropboxList extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {}

    render() {
        return (
            <ListGroup defaultActiveKey="#link1">
                <h1> DropboxList </h1>
            </ListGroup>
        )
    }
}

DropboxList.propTypes = {
};