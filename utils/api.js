import { AsyncStorage } from 'react-native'
import { magenta } from './colors'
import { START_DECKS }from './starterDecks'

const DECK_STORAGE_KEY = 'flashquizzers'

export function getAllDecks () {
  //AsyncStorage.clear();  ----  for debugging
  return  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(checkForDecks)
}

export function getDeck (id) {
  return
}

export function addDeck (title) {
  return
}

export function addCard (title, card) {
  return
}

// helper functions for decks
function checkForDecks (decks) {
  return decks === null
    ? addStarterDecks()
    : JSON.parse(decks)
}

function addStarterDecks () {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(START_DECKS))
  return START_DECKS
}
