import React, { Component } from 'react'
import './StudentAssignment.css'
import { withRouter } from 'react-router-dom';
import ReadmeContainer from "../../Shared/Readme/ReadmeContainer";
import BackButtonContainer from "../../Shared/BackButton/BackButtonContainer";
import SubmissionEditorContainer from "./SubmissionEditor/SubmissionEditorContainer";
import SubmissionViewerContainer from "./SubmissionViewer/SubmissionViewerContainer";

class StudentAssignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignment: this.props.location.state.assignment,
            submission: null,
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {

    }

    getSubmission() {
        if (this.state.submission)
            return (
                <SubmissionViewerContainer
                    content={this.state.submission.content}
                />
            );
        else
            return (
                <SubmissionEditorContainer
                    assignmentName={this.state.assignment.name}
                    firstName={this.props.location.state.firstName}
                    lastName={this.props.location.state.lastName}/>
            );

    }

    render() {
        return (
            <div>
                <div className={'padding-left-sm display-inline'}>
                    <BackButtonContainer path={'/home'}/>
                </div>

                <div>
                    <h2 className={'horizontally-center'}>
                        <span> {this.state.assignment.name} </span>
                    </h2>
                </div>

                {<div className={'margin-bottom-sm'}>
                    <ReadmeContainer
                        assignmentName={this.state.assignment.name}
                        readmeContent={this.state.assignment.readmeContent}/>
                </div>}

                {this.getSubmission()}
            </div>
        )
    }
}

StudentAssignment.propTypes = {
};

export default withRouter(StudentAssignment)