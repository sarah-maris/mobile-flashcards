import { AsyncStorage } from 'react-native'
import { magenta } from './colors'
import { STARTER_DECKS }from './starterDecks'

const DECK_STORAGE_KEY = 'flashquizzers'

export function getAllDecks () {
  //AsyncStorage.clear(); // ----  for debugging
  return  AsyncStorage.getItem(DECK_STORAGE_KEY)
      .then(checkForDecks)
}

export function getDeck (id) {
  // get all decks then pull out the deck we want
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((decks) => JSON.parse(decks))
    .then((decks) => decks[id])
}

export function addNewDeck (title) {
  // add new deck with empty questions array
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {title: title, questions: []}
  }))
}

export function addNewQuestion (id, questions) {
  // replace the questions with the revised list
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [id]: {questions: questions}
  }))
}

// helper functions for decks
function checkForDecks (decks) {
  return decks === null
    ? addStarterDecks()
    : JSON.parse(decks)
}

function addStarterDecks () {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(STARTER_DECKS))
  return STARTER_DECKS
}
