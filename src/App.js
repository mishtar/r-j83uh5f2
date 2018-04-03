import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      count : 0,
      textValue : ''
    }

    this.contador = this.contador.bind(this);
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.contador} value={this.state.textValue}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }

  contador(event){
    this.setState({count : event.target.value.length, textValue: event.target.value});
  }
}

export default App;
