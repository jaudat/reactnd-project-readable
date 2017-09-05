/* CONSTANTS */
export const RECIEVE_ALL_CATEGORIES = 'RECIEVE_ALL_CATEGORIES'
export const RECIEVE_ALL_POSTS = 'RECIEVE_ALL_POSTS'

/* ACTION CREATORS */
export const recieveAllCategories = categories => ({
  type: RECIEVE_ALL_CATEGORIES,
  categories
})
export const recieveAllPosts = posts => ({
  type: RECIEVE_ALL_POSTS,
  posts
})

