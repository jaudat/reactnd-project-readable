// import {list as listCategories} from '../../services/categoriesAPI'
// import {list as listPosts} from '../../services/postsAPI'

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

/* API REQUESTS AND STATE MANAGEMENT */
// export const fetchAllCategories = () => (
//   dispatch => listCategories().then(categories => dispatch( recieveAllCategories(categories) ))
// )
// export const fetchAllPosts = () => (
//   dispatch => listPosts().then(posts => dispatch( recieveAllPosts(posts) ))
// )

