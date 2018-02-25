import { wordList } from '../lib/game'
import { NEW_GAME } from '../actions/types'

const word = wordList[Math.floor(Math.random() * wordList.length)]

export default (state = word, { type, guesses, newWord } = {}) => {
  switch (type) {
    case NEW_GAME :
      return newWord
    default:
      return state
  }
}