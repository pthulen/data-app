import React, { Component } from 'react';
import Timer from './Timer';

class TimerControls extends Component {
constructor(props) {
    super(props);
    
    this.state = {
        ms: 0,
        s: 0,
        m: 0,
        timer: false,
        currentTime: '00:00:00'
    };
    this.start = this.start.bind(this);
    this.run = this.run.bind(this);
    this.getTimer = this.getTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reset = this.reset.bind(this);
}

//starts the timer and runs run() every 10 mili seconds
start() {
    if(!this.state.timer) {
        this.setState({timer: setInterval(this.run, 10) })
    // this.state.timer = setInterval(this.run, 10);
    }
}
//checks the time variables and sets them to the currentTime state
getTimer(){
    this.setState({currentTime: ((this.state.m < 10 ? "0" + this.state.m : this.state.m) + ":" + (this.state.s < 10 ? "0" + this.state.s : this.state.s) + ":" + (this.state.ms < 10 ? "0" + this.state.ms : this.state.ms)) })

}


run() {
    this.getTimer()
    this.setState({ ms: this.state.ms + 1});
    if(this.state.ms === 100) {
        this.setState({
            ms: 0,
            s:this.state.s + 1
        });
    }
    if(this.state.s === 60) {
        this.setState({
            s: 0,
            m: this.state.m + 1
        });
    }
}

stopTimer() {
    clearInterval(this.state.timer);
    this.setState({timer: false});
}

reset() {
    this.stopTimer();
    this.setState({
        ms: 0,
        m: 0,
        s: 0
    });
    this.getTimer();

}

    render() {
        
        return (
            <div>
                <Timer currentTime={this.state.currentTime} />
                <div className="controls">
                    <button onClick={this.start}>Start</button>
                    <button onClick={this.stopTimer}>Stop</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
}

export default TimerControls;