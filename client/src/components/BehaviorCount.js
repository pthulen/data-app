import React, { Component } from 'react';

class BehaviorCount extends Component {
    render() {
        return (
            <div className="behaviors-count">
                <p>RS 1: {this.props.resOne}</p>
                <p>RS 2: {this.props.resTwo}</p>
                <p>RS 3: {this.props.resThree}</p>
            </div>
        );
    }
}

export default BehaviorCount;