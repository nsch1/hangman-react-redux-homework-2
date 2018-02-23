import React, { Component } from 'react';
import Title from './components/Title'
import Board from './containers/Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title content="Hangman" />
        <Board />
      </div>
    );
  }
}

export default App;
