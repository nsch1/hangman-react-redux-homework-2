import { GUESS, NEW_GAME } from './types'
import { randomWord } from '../lib/game'

export const guessLetter = (guess) => {
  return {
    type: GUESS,
    guess
  }
}

export const startNewGame = (newWord) => {
  return {
    type: NEW_GAME,
    newWord: randomWord()
  }
}