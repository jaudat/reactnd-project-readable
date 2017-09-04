const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

/**
  GET /posts
    USAGE:
      Get all of the posts. Useful for the main page when no category is selected.
*/
export const list = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

/**
  POST /posts
    USAGE:
      Add a new post
    PARAMS: 
      id - UUID should be fine, but any unique id will work
      timestamp - timestamp in whatever format you like, you can use Date.now() if you like
      title - String
      body - String
      owner - String
      category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
*/
export const create = (id, timestamp, title, body, owner, category) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id, timestamp, title, body, owner, category})
  }).then(res => res.json())

/**
 GET /:category/posts
    USAGE:
      Get all of the posts for a particular category

*/
export const getAllFromCategory = (categoryPath) => 
  fetch(`${api}/${categoryPath}/posts`, { headers })
    .then(res => res.json())

/**
  GET /posts/:id
    USAGE:
      Get the details of a single post
*/
export const show = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())

/**
  POST /posts/:id
    USAGE:
      Used for voting on a post
    PARAMS:
      option - String: Either "upVote" or "downVote"
*/
export const vote = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option})
  }).then(res => res.json())

/**
  PUT /posts/:id
    USAGE:
      Edit the details of an existing post
    PARAMS:
      title - String
      body - String
*/
export const update = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title, body})
  }).then(res => res.json())

/**
  DELETE /posts/:id
    USAGE:
      Sets the deleted flag for a post to 'true'. 
      Sets the parentDeleted flag for all child comments to 'true'.
*/
export const remove = (id) =>
  fetch(`${api}/posts/${id}`, { method: 'DELETE', headers })