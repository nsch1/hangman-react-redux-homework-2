import { GUESS, NEW_GAME } from './types'

export const guessLetter = (guesses) => {
  return {
    type: GUESS,
    guesses
  }
}

export const startNewGame = (word) => {
  return {
    type: NEW_GAME,
    word
  }
}