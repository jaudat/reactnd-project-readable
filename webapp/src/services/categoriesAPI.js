const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

/**
  GET /categories
    USAGE: 
      Get all of the categories available for the app. List is found in categories.js.
      Feel free to extend this list as you desire.
*/
export const list = () => {
    return fetch(`${api}/categories`, { headers })
      .then( res => res.json() )
      .then( data => data.categories )
}