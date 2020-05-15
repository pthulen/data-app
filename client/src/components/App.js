import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../App.css';
import DataApp from './DataApp';
import Header from './Header';
import DataLoader from './DataLoader';


// const DataLoader = () => <h2>DataLoader component</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
}
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={DataApp} />
            <Route exact path="/dataloader" component={DataLoader} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}



export default connect(null, actions)(App);
