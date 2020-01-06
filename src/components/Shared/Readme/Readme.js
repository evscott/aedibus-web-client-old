import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Readme.css';
import ReactMarkdown from "react-markdown";

export default class Readme extends Component {
    render() {
        return (
            <div className={'readme overflow light-grey border-sm'}>
                <ReactMarkdown source={this.props.readmeContent} />
            </div>
        )
    }
}

Readme.propTypes = {
    assignmentName: PropTypes.string.isRequired,
    readmeContent: PropTypes.string.isRequired,
};