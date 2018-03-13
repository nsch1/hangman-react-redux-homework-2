import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showGuess, wrongGuessCount } from '../lib/game'

class Word extends PureComponent {
  static propTypes = {
    hiddenWord: PropTypes.string.isRequired,
    wrongGuesses: PropTypes.number.isRequired,
    previousGuesses: PropTypes.string.isRequired
  }

  render() {
    const { hiddenWord, wrongGuesses, previousGuesses } = this.props
    return (
      <div className="game-info">
        <h2>{hiddenWord}</h2>
        <h3>Wrong guesses: {wrongGuesses}</h3>
        <h3>Previous guesses: {previousGuesses}</h3>
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => {
  return {
    hiddenWord: showGuess(word, guesses),
    wrongGuesses: wrongGuessCount(word, guesses),
    previousGuesses: guesses.join(', ')
  }
}

export default connect(mapStateToProps)(Word)