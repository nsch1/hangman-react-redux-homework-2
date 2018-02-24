import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startNewGame } from '../actions/game'
import { randomWord } from '../lib/game'

class NewGameButton extends PureComponent {
  static propTypes = {
    startNewGame: PropTypes.func.isRequired
  }

  handleOnClick = () => {
    this.props.startNewGame(randomWord())
  }

  render() {
    return (
      <button onClick={this.handleOnClick}>New Game</button>
    )
  }
}

export default connect(null, { startNewGame })(NewGameButton)