import React, { Component } from 'react'
import './TeacherAssignment.css'
import { withRouter } from 'react-router-dom';
import ReadmeContainer from "../Readme/ReadmeContainer";
import DeleteButtonContainer from "./DeleteButton/DeleteButtonContainer";
import BackButtonContainer from "../../Shared/BackButton/BackButtonContainer";
import {GetDropboxList} from "../../../services/DropboxServices";
import DropboxListContainer from "./DropboxList/DropboxListContainer";

class TeacherAssignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignment: this.props.location.state.assignment,
            dropboxList: [],
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.updateContent = this.updateContent.bind(this);
    }

    componentDidMount() {
        GetDropboxList(this.state.assignment.name).then(res => {
            this.setState({dropboxList: res.list});
            console.log(this.state);
        });
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

                <ReadmeContainer
                    assignmentName={this.state.assignment.name}
                    readmeContent={this.state.assignment.readmeContent}/>

                <h1>
                    <span> Dropboxes </span>
                </h1>
                <DropboxListContainer dropboxList={this.state.dropboxList}/>
            </div>
        )
    }
}

TeacherAssignment.propTypes = {
};

export default withRouter(TeacherAssignment)