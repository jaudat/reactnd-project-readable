import {RECIEVE_SELECTED_POST, RECIEVE_ALL_COMMENTS_ON_SELECTED_POST} from './action'

export function selectedPostReducer(state = [], action) {
  switch (action.type) {
    case RECIEVE_SELECTED_POST:
      return action.selectedPost
    default:
      return state
  }
}

export function allCommentsOnSelectedPostReducer(state = [], action) {
  switch (action.type) {
    case RECIEVE_ALL_COMMENTS_ON_SELECTED_POST:
      return action.allCommentsOnSelectedPost
    default:
      return state
  }
}