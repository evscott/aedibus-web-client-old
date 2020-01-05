import React, { Component } from 'react'
import './SubmissionEditor.css'
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import TextEditorContainer from "../../../Shared/TextEditor/TextEditorContainer";
import {SubmitAssignment} from "../../../../Services/SubmissionServices";

export default class SubmissionEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: `// @author: ${this.props.firstName} ${this.props.lastName}\n`,
            readOnly: false,
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
                    content={this.state.content}
                    updateContent={this.updateContent}
                />

                <div className={'float-right padding-top-sm padding-bottom-sm padding-right-md'}>
                    <Button className={"btn-success"} onClick={this.handleSubmit}>Submit</Button>
                </div>
            </div>
        )
    }
}

SubmissionEditor.propTypes = {
    assignmentName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};