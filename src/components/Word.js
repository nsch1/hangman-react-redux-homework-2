import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showGuess, wrongGuessCount } from '../lib/game'

class Word extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    const { word, guesses } = this.props
    return (
      <div className="game-info">
        <h2>{ showGuess(word, guesses) }</h2>
        <h3>Wrong guesses: {wrongGuessCount(word, guesses)}</h3>
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Word)