export const RECIEVE_SELECTED_POST = 'RECIEVE_SELECTED_POST'
export const RECIEVE_ALL_COMMENTS_ON_SELECTED_POST = 'RECIEVE_ALL_COMMENTS_ON_SELECTED_POST'

export const recieveSelectedPost = selectedPost => ({
  type: RECIEVE_SELECTED_POST,
  selectedPost
})

export const recieveAllCommentOnSelectedPost = allCommentsOnSelectedPost => ({
  type: RECIEVE_ALL_COMMENTS_ON_SELECTED_POST,
  allCommentsOnSelectedPost
})