export const TIMESTAMP = 'TIMESTAMP'
export const VOTES = 'VOTES'
export const UPVOTE = 'upVote'
export const DOWNVOTE = 'downVote'

export const SORT_POSTS_BY = 'SORT_POSTS_BY'
export const INCREMENT_VOTE_IN_POST = 'INCREMENT_VOTE_IN_POST'
export const DECREMENT_VOTE_IN_POST = 'DECREMENT_VOTE_IN_POST'

export const sortPostsBy = (order) => ({
  type: SORT_POSTS_BY,
  sortBy: order
})

export const incrementVote = (post) => ({
  type: INCREMENT_VOTE_IN_POST,
  post
})

export const decrementVote = (post) => ({
  type: DECREMENT_VOTE_IN_POST,
  post
})

