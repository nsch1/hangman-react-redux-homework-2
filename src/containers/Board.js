import React, { PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Word from '../components/Word'
import Form from '../components/Form'
import Flash from '../components/Flash'
import Keyboard from '../components/Keyboard'
import { gameFinished, wrongGuessCount } from '../lib/game'
import './Board.css'

class Board extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    const { finished, imageNum } = this.props
    return (
      <div className="Board">
        <img src={`http://hangman.doncolton.com/play/hang${imageNum}.png`} />
        {finished && <Flash />}
        <Word />
        {!finished && <Keyboard />}
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => {
  return {
    imageNum: wrongGuessCount(word, guesses),
    finished: gameFinished(word, guesses)
  }
}

export default connect(mapStateToProps)(Board)