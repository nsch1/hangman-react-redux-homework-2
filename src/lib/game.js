export const showGuess = (word, guesses) => {
  return word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ");
}

export const wrongGuessLimit = (word, guesses) => {
  return guesses.filter(guess => word.indexOf(guess) < 0).length >= 6
}