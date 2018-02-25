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
    guessLetter(guesses.concat(guess.toLowerCase()))
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

export default connect(null, { guessLetter })(Form)