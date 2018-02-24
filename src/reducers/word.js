import { showGuess } from '../lib/game'
import { GUESS } from '../actions/types'

const word = "hello"

const guessedWord = word.split("").join(" ")

const hiddenWord = word.split("").map(e => "_").join(" ")

export default (state = hiddenWord, { type, guesses } = {}) => {
  switch (type) {
    case GUESS :
      if (showGuess(word, guesses) === guessedWord) return `You won! The word was: ${word}`
      return showGuess(word, guesses)
    default:
      return state
  }
}