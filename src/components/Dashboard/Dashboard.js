import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import './Dashboard.css'
import AssignmentListContainer from "./AssignmentList/AssignmentListContainer";
import DropboxListContainer from "./DropboxList/DropboxListContainer";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            level: 0,
            assignment: null,
        };

        this.toggleListForward = this.toggleListForward.bind(this);
        this.toggleListBackward = this.toggleListBackward.bind(this);
    }

    componentDidMount() {
        this.props.GetAssignments();
    }

    toggleListForward(obj) {
        this.setState({level: this.state.level + 1});

        if (this.state.level === 1) {
            this.setState({
                assignment: obj,
            })
        }
    }

    toggleListBackward() {
        this.setState({level: this.state.level - 1} )
    }


    getList() {
        if (this.state.level === 0)
            return <AssignmentListContainer toggleListForward={this.toggleListForward}/>;
        if (this.state.level === 1)
            return <DropboxListContainer toggleListBackward={this.toggleListBackward}/>;
    }

    render() {
        return (
            <div className={'width-half position-middle'}>
                {this.getList()}
            </div>
        )
    }
}

export default withRouter(Dashboard);
