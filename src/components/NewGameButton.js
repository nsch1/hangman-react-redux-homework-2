import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startNewGame } from '../actions/game'
import { gameFinished } from '../lib/game'

class NewGameButton extends PureComponent {
  static propTypes = {
    startNewGame: PropTypes.func.isRequired,
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  handleOnClick = () => {
    this.props.startNewGame()
  }

  render() {
    const { word, guesses } = this.props

    if (!gameFinished(word, guesses)) return null

    return (
      <button onClick={this.handleOnClick}>New Game</button>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps, { startNewGame })(NewGameButton)