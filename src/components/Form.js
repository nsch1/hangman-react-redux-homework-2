import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guessLetter } from '../actions/game'

class Form extends PureComponent {
  static propTypes = {
    guessLetter: PropTypes.func.isRequired
  }

  handleSubmit = (event) => {
    this.props.guessLetter(event.target.value)
    event.target.reset()
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={(event) => {this.handleSubmit(event)}}>
        <input type="text" className="Form" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default connect(null, { guessLetter })(Form)