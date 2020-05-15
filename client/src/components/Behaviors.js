import React, { Component } from 'react';
import BehaviorCount from './BehaviorCount';

class Behaviors extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            resOne: 0,
            resTwo: 0,
            resThree: 0
        };
        this.increaseBxOne = this.increaseBxOne.bind(this);
        this.increaseBxTwo = this.increaseBxTwo.bind(this);
        this.increaseBxThree = this.increaseBxThree.bind(this);
        this.reset = this.reset.bind(this);
    }
    
    increaseBxOne() {
        var plus1 = this.state.resOne + 1
        this.setState({resOne: plus1});
    }

    increaseBxTwo() {
        var plus1 = this.state.resTwo + 1
        this.setState({resTwo: plus1});
    }
    increaseBxThree() {
        var plus1 = this.state.resThree + 1
        this.setState({resThree: plus1});
    }
    
    reset() {
        this.setState({
            resOne: 0,
            resTwo: 0,
            resThree: 0
        })
    }

    render() {
        return (
            <div>
                <div>
                <BehaviorCount resOne={this.state.resOne} resTwo={this.state.resTwo} resThree={this.state.resThree} />
                <button id="resOne" onClick={this.increaseBxOne}>Response 1</button>
                <button id="resTwo" onClick={this.increaseBxTwo}>Response 2</button>
                <button id="resThree" onClick={this.increaseBxThree}>Response 3</button>
                </div>
                <div>
                <button className="reset" onClick={this.reset}>Reset Behaviors</button>
                </div>
            </div>
        );
    }
}

export default Behaviors;