export const TIMESTAMP = 'TIMESTAMP'
export const VOTES = 'VOTES'

export const SORT_POSTS_BY = 'SORT_POSTS_BY'

export const sortPostsBy = (order) => ({
  type: SORT_POSTS_BY,
  sortBy: order
})

