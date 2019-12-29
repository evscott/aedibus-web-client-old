import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Assignment.css'

class Assignment extends Component{
    
    render(){

        const assignments = Array.from(this.props.data);

        const assignmentNode = assignments.map((assignPage) => {
            return(
                <div>
                    <Link
                        to={"/a/"+assignPage.id}
                        key={assignPage.id}
                    >
                        {assignPage.name}
                    </Link>
                </div>
            );
        });

    return(
        <div style={{paddingLeft: 15}}>
            <h2>Assignments</h2>
            
            <div className="list-group">
                {assignmentNode}
            </div>
        </div>
    );
}
}

export default Assignment;