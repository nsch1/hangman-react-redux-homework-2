import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startNewGame } from '../actions/game'

class NewGameButton extends PureComponent {
  static propTypes = {
    startNewGame: PropTypes.func.isRequired
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") this.props.startNewGame()
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress)
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress)
  }

  handleOnClick = () => {
    this.props.startNewGame()
  }

  render() {
    return (
      <button className="btn" onClick={this.handleOnClick}>New Game</button>
    )
  }
}

export default connect(null, { startNewGame })(NewGameButton)