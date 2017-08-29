export const TIMESTAMP = 'TIMESTAMP'
export const VOTES = 'VOTES'

export const SORT_COMMENTS_BY = 'SORT_COMMENTS_BY'

export const sortCommentsBy = (order) => ({
  type: SORT_COMMENTS_BY,
  sortBy: order
})
