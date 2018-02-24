import React, { Component } from 'react';
import Title from './components/Title'
import Board from './containers/Board'
import NewGameButton from './components/NewGameButton'
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.guesses)
    return (
      <div className="App">
        <Title content="Hangman" />
        <Board />
        <NewGameButton />
      </div>
    );
  }
}

export default App;
