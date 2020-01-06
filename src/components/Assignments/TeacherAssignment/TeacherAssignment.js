import React, { Component } from 'react'
import './TeacherAssignment.css'
import { withRouter } from 'react-router-dom';
import ReadmeContainer from "../../Shared/Readme/ReadmeContainer";
import DeleteButtonContainer from "./DeleteButton/DeleteButtonContainer";
import BackButtonContainer from "../../Shared/BackButton/BackButtonContainer";
import DropboxListContainer from "./DropboxList/DropboxListContainer";
import CreateDropboxFormContainer from "./CreateDropboxForm/CreateDropboxFormContainer";

class TeacherAssignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignment: this.props.location.state.assignment,
            dropboxList: [],
        };
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

                <div className={'teacher-readme'}>
                    <ReadmeContainer assignmentName={this.state.assignment.name} readmeContent={this.state.assignment.readmeContent}/>
                </div>


                <div className={'padding-top-md dropbox-list'}>
                    <h3>
                        <span> Dropboxes </span>
                    </h3>
                    <DropboxListContainer dropboxList={this.state.dropboxList}/>
                    <CreateDropboxFormContainer assignmentName={this.state.assignment.name}/>
                </div>
            </div>
        )
    }
}

TeacherAssignment.propTypes = {
};

export default withRouter(TeacherAssignment)