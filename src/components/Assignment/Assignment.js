import React, { Component } from 'react'
import './Assignment.css'
import {GetReadme} from "../../services/AssignmentServices";
import {Button} from "react-bootstrap";
import { withRouter } from 'react-router-dom';

class Assignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignment: this.props.location.state.assignment,
        };

        this.handleBack = this.handleBack.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        GetReadme(this.state.assignment.name).then(res => {
                this.setState({
                    readme: res.content,
                });
            });
    }

    handleBack(e) {
        e.preventDefault();
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <Button className={'btn btn-default'} onClick={this.handleBack}> Back </Button>
                <h2 className={'horizontally-center'}>
                    <span> {this.state.assignment.name} </span>
                </h2>
                <div className={'float-right padding-right-sm border-double width-half'}>
                    <p>
                        <span> {this.state.readme} </span>
                    </p>
                </div>
            </div>
        )
    }
}

Assignment.propTypes = {
};

export default withRouter(Assignment)