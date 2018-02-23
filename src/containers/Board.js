import React, { PureComponent} from 'react'
import PropTypes from 'prop-types'
//import './Board.css'

class Board extends PureComponent {
  static PropTypes = {
    word: PropTypes.string.isRequired
  }

  render() {
    <div className="Board">
      <Word />
      <Form />
    </div>
  }
}

export default Board