import {SORT_COMMENTS_BY, VOTES} from './action'

export function sortCommentsReducer(state = VOTES, action) {
  switch (action.type) {
    case SORT_COMMENTS_BY:
      return action.sortBy
    default:
      return state
  }
} 