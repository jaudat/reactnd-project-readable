export const RECIEVE_CREATED_POST = 'RECIEVE_CREATED_POST'
export const RECIEVE_UPDATED_POST = 'RECIEVE_UPDATED_POST'
export const RECIEVE_FORM_POST = 'RECIEVE_FORM_POST'
export const RECIEVE_POSTFORM_REDIRECT = 'RECIEVE_POSTFORM_REDIRECT'

export const recieveCreatedPost = newPost => ({
  type: RECIEVE_CREATED_POST,
  post: newPost
})

export const recieveUpdatedPost = updatedPost => ({
  type: RECIEVE_UPDATED_POST,
  post: updatedPost
})

export const recieveFormPost = formPost => ({
  type: RECIEVE_FORM_POST,
  formPost
})

export const recievePostFormRedirect = value => ({
  type: RECIEVE_POSTFORM_REDIRECT,
  value
})