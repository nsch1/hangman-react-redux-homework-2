import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startNewGame } from '../actions/game'
import { isWinner, wrongGuessLimit } from '../lib/game'

class Flash extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  handleKeyPress = (e) => {
    console.log(e.key)
    if (e.key === "Enter") this.props.startNewGame()
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress)
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress)
  }

  renderFlash = () => {
    const { word, guesses } = this.props

    if (isWinner(word, guesses)) return <h2>You won!</h2>
    if (wrongGuessLimit(word, guesses)) return <h2>You lost.. the word was: {word}.</h2>
    return null
  }

  render() {
    return this.renderFlash()
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps, { startNewGame })(Flash)