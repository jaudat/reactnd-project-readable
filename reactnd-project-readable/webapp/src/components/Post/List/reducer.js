import {SORT_POSTS_BY, VOTES} from './action'

export function sortPostsReducer(state = VOTES, action) {
  switch (action.type) {
    case SORT_POSTS_BY:
      return action.sortBy
    default:
      return state
  }
} 