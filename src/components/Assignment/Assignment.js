import React, { Component } from 'react'
import './Assignment.css'

export default class Assignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            aid: this.props.match.params.aid
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>{this.state.aid} </h1>
            </div>
        )
    }
}

Assignment.propTypes = {
};