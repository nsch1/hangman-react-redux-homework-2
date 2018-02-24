import { GUESS } from '../actions/types'

export default (state = [], { type, guesses } = {}) => {
  switch (type) {
    case GUESS :
      return guesses
    default:
      return state
  }
}