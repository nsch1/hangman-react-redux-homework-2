import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { showGuess, wrongGuessLimit, wordList } from '../lib/game'

class Word extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    const { word, guesses} = this.props
    return <h2>{ showGuess(word, guesses) }</h2>
  }
}

export default Word