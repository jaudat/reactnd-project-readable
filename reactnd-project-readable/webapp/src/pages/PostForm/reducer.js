import {RECIEVE_FORM_POST, RECIEVE_POSTFORM_REDIRECT} from './action'

export const formPostReducer = (state={}, action) => {
  switch (action.type) {
    case RECIEVE_FORM_POST:
      return action.formPost
    default:
      return state
  }
}

export function postFormRedirectReducer(state = false, action) {
  switch (action.type) {
    case RECIEVE_POSTFORM_REDIRECT:
      return action.value
    default:
      return state
  }
} 