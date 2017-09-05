import {SORT_COMMENTS_BY, VOTES, RECIEVE_FORM_COMMENT, RECIEVE_EDITING_COMMENT_ID} from './action'

export function sortCommentsReducer(state = VOTES, action) {
  switch (action.type) {
    case SORT_COMMENTS_BY:
      return action.sortBy
    default:
      return state
  }
} 

export function formCommentReducer(state={author:'', body:''}, action) {
  switch (action.type) {
    case RECIEVE_FORM_COMMENT:
      return action.formComment
    default:
      return state
  }
}

export function editingCommentReducer(state='', action) {
  switch (action.type) {
    case RECIEVE_EDITING_COMMENT_ID:
      return action.commentId
    default:
      return state
  }
}