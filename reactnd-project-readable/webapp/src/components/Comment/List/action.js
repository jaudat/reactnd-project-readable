export const TIMESTAMP = 'TIMESTAMP'
export const VOTES = 'VOTES'
export const UPVOTE = 'upVote'
export const DOWNVOTE = 'downVote'

export const SORT_COMMENTS_BY = 'SORT_COMMENTS_BY'
export const DECREMENT_VOTE_IN_COMMENT = 'DECREMENT_VOTE_IN_COMMENT'
export const INCREMENT_VOTE_IN_COMMENT = 'INCREMENT_VOTE_IN_COMMENT'

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