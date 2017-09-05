// export const RECIEVE_DELETED_POST = 'RECIEVE_DELETED_POST'
export const RECIEVE_POSTDETAIL_REDIRECT = 'RECIEVE_POSTDETAIL_REDIRECT'

// export const deletePost = (postId) => {
//   return {
//     type: RECIEVE_DELETED_POST,
//     postId
//   }
// }

export const recievePostDetailRedirect = (value) => {
  return {
    type: RECIEVE_POSTDETAIL_REDIRECT,
    value
  }
}