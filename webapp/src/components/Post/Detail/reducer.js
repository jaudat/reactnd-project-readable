import {RECIEVE_POSTDETAIL_REDIRECT} from './action'

export function postDetailRedirectReducer(state = false, action) {
  switch (action.type) {
    case RECIEVE_POSTDETAIL_REDIRECT:
      return action.value
    default:
      return state
  }
} 