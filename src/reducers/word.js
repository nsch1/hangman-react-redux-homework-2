import { showGuess, wrongGuessLimit, wordList } from '../lib/game'
import { GUESS, NEW_GAME } from '../actions/types'

const word = wordList[Math.floor(Math.random() * wordList.length)]

export default (state = word, { type, guesses, newWord } = {}) => {
  switch (type) {
    case GUESS :
      //if (wrongGuessLimit(state, guesses)) return `You lost.. :( The word was: ${word}`
      //if (showGuess(state, guesses) === guessedWord) return `You won! The word was: ${word}`
      return state
    case NEW_GAME :
      return newWord
    default:
      return state
  }
}