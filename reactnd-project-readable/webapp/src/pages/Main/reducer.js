import {RECIEVE_ALL_CATEGORIES, RECIEVE_ALL_POSTS} from './action'
import {INCREMENT_VOTE_IN_POST, DECREMENT_VOTE_IN_POST} from '../../components/Post/List/action'
// import {RECIEVE_DELETED_POST} from '../../components/Post/Detail/action'
import {RECIEVE_CREATED_POST, RECIEVE_UPDATED_POST} from '../PostForm/action'

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
    case INCREMENT_VOTE_IN_POST:
      return (
        state.map( (post) => {
          if (post.id === action.post.id) {
              return action.post
          }
          return post
        })
      )
    case DECREMENT_VOTE_IN_POST:
      return (
        state.map( (post) => {
          if (post.id === action.post.id) {
              return action.post
          }
          return post
        })
      )
    case RECIEVE_CREATED_POST:
      return state.splice(state.length, 0, action.post)
    case RECIEVE_UPDATED_POST:
      return (
        state.map( (post) => {
          if (post.id === action.post.id) return action.post
          return post
        })
      )
    // case RECIEVE_DELETED_POST:
    //   return (
    //     state.map( (post) => {
    //       if (post.id === action.postId) return { ...post , deleted: true }
    //       return post
    //     })
    //   )
    default: 
      return state
  }
}