import { randomWord } from '../lib/game'
import { NEW_GAME } from '../actions/types'

export default (state = randomWord(), { type, newWord } = {}) => {
  switch (type) {
    case NEW_GAME :
      return newWord
    default:
      return state
  }
}