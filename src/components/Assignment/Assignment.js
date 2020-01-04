import React, { Component } from 'react'
import './Assignment.css'
import {Button} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import ReadmeContainer from "./Readme/ReadmeContainer";
import TextEditorContainer from "../Shared/TextEditor/TextEditorContainer";
import DeleteButtonContainer from "./DeleteButton/DeleteButtonContainer";
import BackButtonContainer from "../Shared/BackButton/BackButtonContainer";

class Assignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignment: this.props.location.state.assignment,
            content: `// @author: ${this.props.location.state.userFirstName} ${this.props.location.state.userLastName}\n`,
            readOnly: false,
            mode: 'javascript',
        };

        this.updateContent = this.updateContent.bind(this);
    }

    updateContent(newContent) {
        this.setState({
            content: newContent,
        });
    }

    render() {
        return (
            <div>
                <div className={'padding-left-sm display-inline'}>
                    <BackButtonContainer path={'/home'}/>
                </div>

                <div className={'float-right display-inline'}>
                    <DeleteButtonContainer assignmentName={this.state.assignment.name}/>
                </div>

                <div>
                    <h2 className={'horizontally-center'}>
                        <span> {this.state.assignment.name} </span>
                    </h2>
                </div>

                <div className={'margin-bottom-sm'}>
                    <ReadmeContainer
                        assignmentName={this.state.assignment.name}
                        readmeContent={this.state.assignment.readmeContent}/>
                </div>

                <TextEditorContainer
                    mode={'javascript'}
                    content={this.state.content}
                    updateContent={this.updateContent}
                />

                <div className={'float-right padding-top-sm padding-bottom-sm padding-right-md'}>
                    <Button className={"btn-success"}>Submit</Button>
                </div>
            </div>
        )
    }
}

Assignment.propTypes = {
};

export default withRouter(Assignment)