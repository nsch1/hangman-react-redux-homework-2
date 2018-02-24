import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guessLetter } from '../actions/game'

class Form extends PureComponent {
  static propTypes = {
    guessLetter: PropTypes.func.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  handleSubmit = (guess) => {
    this.props.guessLetter(this.props.guesses.concat(guess))
    //event.target.reset()
  }

  render() {
    let input
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.handleSubmit(input.value)
        event.target.reset()
      }}>
        <input type="text" className="Form" ref={node => {input = node}} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default connect(null, { guessLetter })(Form)