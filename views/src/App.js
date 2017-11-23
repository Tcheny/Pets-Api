import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './Display';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets : []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/pets/')
      .then(res => res.json())
      .then(body => this.setState({
        pets : body })
      )
  }

  render() {

    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Form />
      <Display pets={this.state.pets}/>
    </div>;
  }
}

export default App;
