import React, {Component} from 'react';

class AssignDetail extends Component {

    render() {
        const data = this.props.data;
        const id = this.props.data.id;
        const assignment = data.filter(
            assignment => {
                if(assignment.id == id) {
                    return assignment;
                }
            }
        )
        return(
            <div>
                <h1>{assignment.name}</h1>
                <p>assignment content goes here ...</p>
            </div>
        );
    }
}

export default AssignDetail;