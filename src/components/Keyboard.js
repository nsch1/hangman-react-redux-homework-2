import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guessLetter } from '../actions/game'

class Keyboard extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    firstRow: PropTypes.string.isRequired,
    secondRow: PropTypes.string.isRequired,
    thirdRow: PropTypes.string.isRequired
  }

  handleKeyPress = (e) => {
    const guess = e.key
    const { guesses, guessLetter } = this.props
    const lowerGuess = guess.toLowerCase().replace(/[^a-z]/g, '')
    if (guesses.indexOf(lowerGuess) === -1 && lowerGuess.length === 1) guessLetter(lowerGuess)
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress)
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress)
  }

  render() {
    const { firstRow, secondRow, thirdRow } = this.props

    return (
      <div className="Keyboard">
        <h2>{firstRow}</h2>
        <h2>{secondRow}</h2>
        <h2>{thirdRow}</h2>
      </div>
    )
  }

}

const mapStateToProps = ({ word, guesses, keyboard }) => {
  return {
    word,
    guesses,
    firstRow: keyboard[0],
    secondRow: keyboard[1],
    thirdRow: keyboard[2]
  }
}

export default connect(mapStateToProps, { guessLetter })(Keyboard)