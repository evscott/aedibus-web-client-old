import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {GetReadme} from "../../../services/AssignmentServices";
import './Readme.css';
import ReactMarkdown from "react-markdown";

export default class Readme extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        GetReadme(this.props.assignmentName).then(res => {
            this.setState({
                content: res.content,
            });
        });
    }

    render() {
        return (
            <div className={'readme-height overflow light-grey border-sm'}>
                <ReactMarkdown source={this.state.content} />
            </div>
        )
    }
}

Readme.propTypes = {
    assignmentName: PropTypes.string,
};