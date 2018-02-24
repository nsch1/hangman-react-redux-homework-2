import { GUESS, NEW_GAME } from '../actions/types'

export default (state = [], { type, guesses } = {}) => {
  switch (type) {
    case GUESS :
      return guesses
    case NEW_GAME :
      return []
    default:
      return state
  }
}