import { AsyncStorage } from 'react-native'
import { magenta } from './colors'
import { START_DECKS }from './starterDecks'

const DECK_STORAGE_KEY = 'flashquizzers'

export function getDecks () {
  //AsyncStorage.clear();  ----  for debugging
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then( (decks) => decks ? console.log("yay!", decks ) :
       // if not decks add starter decks
       (AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(START_DECKS )), console.log("start!",START_DECKS))
     )
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
