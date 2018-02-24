import { GUESS, NEW_GAME } from './types'

export const guessLetter = (guesses) => {
  return {
    type: GUESS,
    guesses
  }
}

export const startNewGame = (newWord) => {
  return {
    type: NEW_GAME,
    newWord
  }
}