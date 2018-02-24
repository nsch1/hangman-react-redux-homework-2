import { showGuess } from '../lib/game'
import { GUESS } from '../actions/types'

export default (state = "_ _ _ _ _", { type, guesses } = {}) => {
  switch (type) {
    case GUESS :
      return showGuess("hello", guesses)
    default:
      return state
  }
}