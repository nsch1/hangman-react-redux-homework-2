import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Word extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired
  }

  render() {
    return <h2>{ this.props.word }</h2>
  }
}

export default Word