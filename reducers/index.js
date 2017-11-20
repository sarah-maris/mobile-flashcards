import { GET_DECKS,
         GET_DECK,
         ADD_DECK,
         ADD_QUESTION } from '../actions'

function decks (state = {}, action) {

  switch (action.type) {

    case GET_DECKS :
      return {
        ...action.decks
      }

    case GET_DECK :
      return {
        [action.id]: action.deck
      }

    case ADD_DECK :
      return {
        ...state,
          [action.title]: {
            title:action.title,
            questions: []
          }
      }

    case ADD_QUESTION :
    console.log(action, state[action.id])
      return {
        ...state,
          [action.id]: {
            ...state[action.id],
            questions: [...state[action.id].questions, action.question]
          }
      }

    default :
      return state
  }
}

export default decks
