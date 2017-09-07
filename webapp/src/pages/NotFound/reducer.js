import {RECIEVE_404} from './action'

export function pageNotFoundReducer(state=false, action) {
  switch(action.type) {
    case RECIEVE_404:
      return action.value
    default: 
      return state
  }
}