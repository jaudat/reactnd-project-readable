import {RECIEVE_SELECTED_POST, RECIEVE_ALL_COMMENTS_ON_SELECTED_POST} from './action'
import {INCREMENT_VOTE_IN_POST, DECREMENT_VOTE_IN_POST} from '../../components/Post/List/action'
import {INCREMENT_VOTE_IN_COMMENT, DECREMENT_VOTE_IN_COMMENT} from '../../components/Comment/List/action'

export function selectedPostReducer(state = {}, action) {
  switch (action.type) {
    case RECIEVE_SELECTED_POST:
      return action.selectedPost
    case INCREMENT_VOTE_IN_POST:
      return (state.id === action.post.id) ? action.post : state
    case DECREMENT_VOTE_IN_POST:
      return (state.id === action.post.id) ? action.post : state
    default:
      return state
  }
}

export function allCommentsOnSelectedPostReducer(state = [], action) {
  switch (action.type) {
    case RECIEVE_ALL_COMMENTS_ON_SELECTED_POST:
      return action.allCommentsOnSelectedPost
    case INCREMENT_VOTE_IN_COMMENT:
      return state.map( comment => {
        if (comment.id === action.comment.id) return action.comment
        return comment
      })
    case DECREMENT_VOTE_IN_COMMENT:
      return state.map( comment => {
        if (comment.id === action.comment.id) return action.comment
        return comment
      })
    default:
      return state
  }
}