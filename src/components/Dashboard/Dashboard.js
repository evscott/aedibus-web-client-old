import React, {Component} from "react";
import './Dashboard.css'
import { withRouter } from 'react-router-dom';
import AssignmentListContainer from "./AssignmentList/AssignmentListContainer";
import {Button} from "react-bootstrap";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createAssignment: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push('/assigment/create');
    }

    render() {
        return (
            <div className={'width-half position-middle'}>
                <AssignmentListContainer/>
                <div className={'float-right padding-top-sm'}>
                    <Button className={'btn-success'} onClick={this.handleClick}>+</Button>
                </div>
            </div>
        );
    }
}

export default  withRouter(Dashboard);
