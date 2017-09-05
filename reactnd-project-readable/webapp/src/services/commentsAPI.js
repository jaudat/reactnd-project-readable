const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

/**
  GET /posts/:id/comments
    USAGE:
      Get all the comments for a single post
*/
export const list = (id) => (

    fetch(`${api}/posts/${id}/comments`, { headers })
      .then(res => res.json())

)

/**
  POST /comments
    USAGE:
      Add a comment to a post
    PARAMS:
      id: Any unique ID. As with posts, UUID is probably the best here.
      timestamp: timestamp. Get this however you want.
      body: String
      owner: String
      parentId: Should match a post id in the database.
*/
export const create = (id, timestamp, body, owner, parentId) => {

    fetch(`${api}/comments`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, timestamp, body, owner, parentId})
    }).then(res => res.json())


}


/**
  GET /comments/:id
    USAGE:
      Get the details for a single comment
*/
export const show = (id) => {

    fetch(`${api}/comments/${id}`, { headers })
      .then(res => res.json())


}

/**
  POST /comments/:id
    USAGE:
      Used for voting on a comment.
*/
export const vote = (id, option) => (
    fetch(`${api}/comments/${id}`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({option})
    }).then(res => res.json())
  )
  

/**
  PUT /comments/:id
    USAGE:
      Edit the details of an existing comment
    PARAMS:
      timestamp: timestamp. Get this however you want.
      body: String
*/
export const update = (id, timestamp, body) => (
    fetch(`${api}/comments/${id}`, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({timestamp, body})
    }).then(res => res.json())
  )

/**
  DELETE /comments/:id
    USAGE:
      Sets a comment's deleted flag to 'true'
*/
export const remove = (id) => (
  fetch(`${api}/comments/${id}`, { method: 'DELETE', headers })
    .then(res => res.json())
)
