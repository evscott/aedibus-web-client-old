import React, { Component } from 'react'
import './CreateDropboxForm.css'
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from "react-bootstrap";
import {CreateDropbox, GetDropboxList} from "../../../../services/DropboxServices";

export default class CreateDropboxForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropboxName: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            dropboxName: e.target.value,
        });
    }

    handleClick() {
        CreateDropbox(this.props.assignmentName, this.state.dropboxName)
            .then(res => {
            console.log(res);
            this.setState({dropboxName: ''});
            this.props.onClick();
            });
    }

    render() {
        return (
            <InputGroup className={"mb-3 width-half"}>
                <FormControl
                    placeholder={"dropbox name"}
                    value={this.state.dropboxName}
                    onChange={this.handleChange}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={this.handleClick}>Create</Button>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}

CreateDropboxForm.propTypes = {
    assignmentName: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};