const initialState = [
  "Q W E R T Y U I O P",
  "A S D F G H J K L",
  "Z X C V B N M"
]

export default (state = initialState, { type, guess }) => {
  switch(type) {
    case 'GUESS':
      const upperGuess = guess.toUpperCase()
      return state.map(row => {
        if (row.includes(upperGuess)) return row.replace(upperGuess, '_')
        return row
      })
    case 'NEW_GAME':
      return initialState
    default:
      return state
  }
}