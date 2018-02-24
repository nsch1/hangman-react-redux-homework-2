import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { showGuess, wrongGuessLimit } from '../lib/game'

class Flash extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  renderFlash = () => {
    if (showGuess(this.props.word, this.props.guesses) === this.props.word.split('').join(' ')) return <h2>You won!</h2>
    if (wrongGuessLimit(this.props.word, this.props.guesses)) return <h2>You lost.. the word was: {this.props.word}.</h2>
    return null
  }

  render() {
    return this.renderFlash()
  }
}

export default Flash