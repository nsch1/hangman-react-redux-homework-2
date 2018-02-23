import { GUESS } from './types'

export const guessLetter = (guess) => {
  return {
    type: GUESS,
    payload: {
      guess
    }
  }
}