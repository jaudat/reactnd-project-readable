export const TIMESTAMP = 'TIMESTAMP'
export const VOTES = 'VOTES'
export const UPVOTE = 'upVote'
export const DOWNVOTE = 'downVote'

export const SORT_COMMENTS_BY = 'SORT_COMMENTS_BY'
export const DECREMENT_VOTE_IN_COMMENT = 'DECREMENT_VOTE_IN_COMMENT'
export const INCREMENT_VOTE_IN_COMMENT = 'INCREMENT_VOTE_IN_COMMENT'
export const RECIEVE_CREATED_COMMENT = 'RECIEVE_CREATED_COMMENT'
export const RECIEVE_UPDATED_COMMENT = 'RECIEVE_UPDATED_COMMENT'
export const RECIEVE_DELETED_COMMENT = 'RECIEVE_DELETED_COMMENT'
export const RECIEVE_FORM_COMMENT = 'RECIEVE_FORM_COMMENT'

export const sortCommentsBy = (order) => ({
  type: SORT_COMMENTS_BY,
  sortBy: order
})

export const incrementVote = (comment) => ({
  type: INCREMENT_VOTE_IN_COMMENT,
  comment
})

export const decrementVote = (comment) => ({
  type: DECREMENT_VOTE_IN_COMMENT,
  comment
})

export const recieveFormComment = (formComment) => ({
  type: RECIEVE_FORM_COMMENT,
  formComment
})

export const recieveCreatedComment = newComment => ({
  type: RECIEVE_CREATED_COMMENT,
  comment: newComment
})

export const recieveUpdatedComment = updatedComment => ({
  type: RECIEVE_UPDATED_COMMENT,
  comment: updatedComment
})

export const recieveDeletedComment = commentId => ({
  type: RECIEVE_DELETED_COMMENT,
  commentId
})

