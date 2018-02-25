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

  handleSubmit = (e) => {
    const guess = e.target.value
    e.target.value = null
    const { guesses, guessLetter } = this.props
    const lowerGuess = guess.toLowerCase().replace(/\s/g, '')
    if (guesses.indexOf(lowerGuess) === -1 && lowerGuess !== "") guessLetter(lowerGuess)
  }

  render() {
    const { word, guesses } = this.props

    if(gameFinished(word, guesses)) return null

    let input
    return (
      <form>
        <input type="text" maxLength="1" className="Form"  onChange={e => this.handleSubmit.bind(this)(e)} />
      </form>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps, { guessLetter })(Form)