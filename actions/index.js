export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function getDecks (decks) {
  return {
    type: GET_DECKS,
    decks
  }
}

export function getDeck (id) {
  return {
    type: GET_DECK,
    id
  }
}

export function addDeck (title) {
  return {
    type: ADD_DECK,
    title
  }
}

export function addCard (id, card) {
  return {
    type: ADD_DECK,
    id,
    card
  }
}
