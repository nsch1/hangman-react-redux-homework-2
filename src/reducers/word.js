import { randomWord } from '../lib/game'
import { NEW_GAME } from '../actions/types'

export default (state = randomWord(), { type } = {}) => {
  switch (type) {
    case NEW_GAME :
      return randomWord()
    default:
      return state
  }
}