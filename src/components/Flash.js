import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isWinner, wrongGuessLimit } from '../lib/game'

class Flash extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    winner: PropTypes.bool.isRequired,
    loser: PropTypes.bool.isRequired
  }

  renderFlash = () => {
    const { winner, loser, word } = this.props

    if (winner) return <h2>You won!</h2>
    if (loser) return <h2>the word was: {word}.</h2>
  }

  render() {
    return this.renderFlash()
  }
}

const mapStateToProps = ({ word, guesses }) => {
  return {
    word,
    winner: isWinner(word, guesses),
    loser: wrongGuessLimit(word, guesses)
  }
}

export default connect(mapStateToProps)(Flash)