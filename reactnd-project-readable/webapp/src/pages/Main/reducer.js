import {RECIEVE_ALL_CATEGORIES, RECIEVE_ALL_POSTS} from './action'

export function categoriesReducer(state = [], action) {
  switch (action.type) {
    case RECIEVE_ALL_CATEGORIES:
      return action.categories
    default:
      return state
  }
}

export function postsReducer(state = [], action) {
  switch (action.type) {
    case RECIEVE_ALL_POSTS:
      return action.posts
    default: 
      return state
  }
}