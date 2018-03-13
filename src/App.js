import React, { Component } from 'react';
import Title from './components/Title'
import Word from './components/Word'
import Flash from './components/Flash'
import Keyboard from './components/Keyboard'
import NewGameButton from './components/NewGameButton'
import { gameFinished, wrongGuessCount } from './lib/game'
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    const { imageNum, finished } = this.props
    const imageUrl = `http://hangman.doncolton.com/play/hang${imageNum}.png`
    return (
      <div className="App">
        <Title content="Hangman" />

        <img src={imageUrl} alt="hangman" />

        {
          finished && 
          <Flash />
        }

        <Word />

        {
          !finished && 
          <Keyboard />
        }
        
        {
          finished &&
          <NewGameButton />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ word, guesses }) => {
  return {
    imageNum: wrongGuessCount(word, guesses),
    finished: gameFinished(word, guesses)
  }
}

export default connect(mapStateToProps)(App)