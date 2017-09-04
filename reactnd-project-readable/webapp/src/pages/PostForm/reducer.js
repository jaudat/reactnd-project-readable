import {RECIEVE_FORM_POST} from './action'

export const formPostReducer = (state={}, action) => {
  switch (action.type) {
    case RECIEVE_FORM_POST:
      return action.formPost
    default:
      return state
  }
}