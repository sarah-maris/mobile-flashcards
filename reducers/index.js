import { GET_DECKS,
         GET_DECK,
         ADD_DECK,
         ADD_CARD } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {


  case GET_DECKS :
    return {
      ...action.decks
    }

    case GET_DECK :
      return {
        ...state[action.id]
      }

    case ADD_DECK :
      return {
        ...state,
          [action.id]: [
            ...state[action.id],
            action.card
          ]
      }

    default :
      return state
  }
}

export default decks
