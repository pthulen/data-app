import React, { Component } from 'react';
import TimerControls from './TimerControls';
import Behaviors from './Behaviors';

class DataApp extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <h3>The ABA App</h3>
                        <p>Behaviors</p>
                        <Behaviors />
                        <p>Timer</p>
                        <TimerControls />
                    </header>
                </div>
            </div>
        );
    }
}

export default DataApp;