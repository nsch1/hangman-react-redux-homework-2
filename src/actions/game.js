import { GUESS } from './types'

export const guessLetter = (guesses) => {
  return {
    type: GUESS,
    guesses
  }
}