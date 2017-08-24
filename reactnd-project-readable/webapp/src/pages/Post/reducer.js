import {RECIEVE_SELECTED_POST} from './action'

export function selectedPostReducer(state = [], action) {
  switch (action.type) {
    case RECIEVE_SELECTED_POST:
      return action.selectedPost
    default:
      return state
  }
}