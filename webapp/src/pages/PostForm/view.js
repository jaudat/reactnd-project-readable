import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {recieveCreatedPost, recieveUpdatedPost, recieveFormPost, recievePostFormRedirect} from './action'
import {create, update} from '../../services/postsAPI'

class View extends Component {
  constructor(props) {
    super(props)

    this.props.redirect(false)
  }

  handleSubmit = (event) => {
    (this.props.formPost.isNew) ? this.props.newPost(this.props.formPost) : this.props.editPost(this.props.formPost)
    event.preventDefault()
    this.props.redirect(true)
  } 

  handleTitle = (event) => {
    this.props.saveFormPost({...this.props.formPost, title:event.target.value})
  }

  handleAuthor = (event) => {
    this.props.saveFormPost({...this.props.formPost, author:event.target.value})
  }

  handleCategory = (event) => {
    this.props.saveFormPost({...this.props.formPost, category:event.target.value})
  }

  handleBody = (event) => {
    this.props.saveFormPost({...this.props.formPost, body:event.target.value})
  }

  render = () => {
    if (this.props.postFormRedirect) return <Redirect to='/' />

    const post = this.props.formPost
    return (
      <form className='post-wrapper' onSubmit={this.handleSubmit}>
        
        <fieldset className="form-group">
          <label>Title: </label>
          <input type='text' name='title' value={post.title} onChange={this.handleTitle}/>
        </fieldset>
        
        <fieldset className={(post.isNew) ? 'form-group' : 'hidden'}>
          <label>Author: </label>
          <input type='text' name='author' value={post.author} onChange={this.handleAuthor}/>
        </fieldset>
  
        <fieldset className={(post.isNew) ? 'form-group' : 'hidden'}>
          <label>Category: </label>
          <input type='text' name='category' value={post.category} onChange={this.handleCategory}/>
        </fieldset>
  
  
        <fieldset className="form-group">
          <label>Content: </label>
          <input type='text' name='body' value={post.body} style={{width:'400px', height:'40px'}} onChange={this.handleBody}/>
        </fieldset>
  
        <input type='submit' value='Submit' />
      </form>
    )
  
  }
}


/**
 * 
 * @param {*} state 
 * @param {*} props 
 */
const mapStateToProps = ({formPost, postFormRedirect}, props) => ({
    formPost,
    postFormRedirect
  })
  
const mapDispatchToProps = (dispatch) => {

  return {
    newPost: (post) => create(post.id, post.timestamp, post.title, post.body, post.author, post.category).then( newPost => dispatch(recieveCreatedPost(newPost)) ),
    editPost: (post) => update(post.id, post.title, post.body).then( editedPost => dispatch(recieveUpdatedPost(editedPost)) ),
    saveFormPost: (post) => dispatch(recieveFormPost(post)),
    redirect: (value) => dispatch(recievePostFormRedirect(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)