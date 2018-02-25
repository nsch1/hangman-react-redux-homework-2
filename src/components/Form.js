import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guessLetter } from '../actions/game'
import { gameFinished } from '../lib/game'

class Form extends PureComponent {
  static propTypes = {
    guessLetter: PropTypes.func.isRequired,
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  handleSubmit = (guess) => {
    const { guesses, guessLetter } = this.props
    const lowerGuess = guess.toLowerCase()
    if (guesses.indexOf(lowerGuess) === -1) guessLetter(lowerGuess)
  }

  render() {
    const { word, guesses } = this.props

    if(gameFinished(word, guesses)) return null

    let input
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.handleSubmit(input.value)
        event.target.reset()
      }}>
        <input type="text" maxLength="1" className="Form" ref={text => {input = text}} />
      </form>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps, { guessLetter })(Form)