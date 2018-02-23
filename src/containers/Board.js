import React, { PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
        <Word word={this.props.word} />
        <Form />
      </div>
    )
  }
}

const mapStateToProps = ({ word }) => ({ word })

export default connect(mapStateToProps)(Board)