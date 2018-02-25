import { GUESS, NEW_GAME } from '../actions/types'

export default (state = [], { type, guess } = {}) => {
  switch (type) {
    case GUESS :
      return state.concat(guess)
    case NEW_GAME :
      return []
    default:
      return state
  }
}