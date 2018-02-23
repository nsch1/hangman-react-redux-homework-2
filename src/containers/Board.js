import React, { PureComponent} from 'react'
import PropTypes from 'prop-types'
import Word from '../components/Word'
import Form from '../components/Form'
//import './Board.css'

class Board extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="Board">
        <Word word={this.props.word}/>
        <Form />
      </div>
    )
  }
}

export default Board