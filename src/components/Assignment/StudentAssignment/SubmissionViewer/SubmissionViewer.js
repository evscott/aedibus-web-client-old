import React, { Component } from 'react'
import './SubmissionViewer.css'
import PropTypes from 'prop-types';
import TextEditorContainer from "../../../Shared/TextEditor/TextEditorContainer";
import {SubmitAssignment} from "../../../../Services/SubmissionServices";

export default class SubmissionViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            readOnly: true,
            mode: 'javascript',
        };

        this.updateContent = this.updateContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateContent(newContent) {
        this.setState({
            content: newContent,
        });
    }

    handleSubmit() {
        console.log(this.state);
        SubmitAssignment(this.props.assignmentName, this.props.firstName, this.state.content)
            .then(res => {
                console.log(res);
            });
    }

    render() {
        return (
            <div>
                <TextEditorContainer
                    mode={this.state.mode}
                    readOnly={this.state.readOnly}
                    content={this.props.content}
                    updateContent={this.updateContent}
                />
            </div>
        )
    }
}

SubmissionViewer.propTypes = {
    content: PropTypes.string.isRequired,
};