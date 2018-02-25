import React, { PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Word from '../components/Word'
import Form from '../components/Form'
import Flash from '../components/Flash'
import NewGameButton from '../components/NewGameButton'
//import './Board.css'

class Board extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    const { word, guesses } = this.props

    return (
      <div className="Board">
        <Flash word={word} guesses={guesses} />
        <Word word={word} guesses={guesses} />
        <Form word={word} guesses={guesses} />
      </div>
    )
  }
}

const mapStateToProps = ({ word, guesses }) => ({ word, guesses })

export default connect(mapStateToProps)(Board)