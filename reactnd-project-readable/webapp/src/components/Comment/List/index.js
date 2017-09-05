import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {vote, create, update, remove} from '../../../services/commentsAPI'
import { 
  sortCommentsBy, 
  TIMESTAMP, 
  VOTES, 
  UPVOTE, 
  DOWNVOTE, 
  incrementVote, 
  decrementVote, 
  recieveFormComment, 
  recieveCreatedComment, 
  recieveUpdatedComment,
  recieveDeletedComment
} from './action'
import './style.css'

class CommentList extends Component {

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.sortCommentsBy !== this.props.sortCommentsBy) {
      (nextProps.sortCommentsBy === TIMESTAMP) ? this.orderByTimestamp() : this.orderByVotes()
    }

  }

  orderByTimestamp() {
    this.props.allCommentsOnSelectedPost.sort((a, b) => (a.timestamp >= b.timestamp) ? -1 : 1 )
  }

  orderByVotes() {
    this.props.allCommentsOnSelectedPost.sort((a, b) => (a.voteScore >= b.voteScore) ? -1 : 1 )
  }

  handleDelete = (commentId, event) => {
    this.props.deleteComment(commentId)
  }

  handleEdit = (commentId, event) => {
    
  }

  handleCreate = (event) => {
    this.props.newComment({ ...this.props.formComment, postId: this.props.selectedPost.id})
    this.props.saveFormComment({author: '', body: ''})
    event.preventDefault()
  } 

  handleBody = (event) => {
    this.props.saveFormComment({...this.props.formComment, body:event.target.value})
  }

  handleAuthor = (event) => {
    this.props.saveFormComment({...this.props.formComment, author:event.target.value})
  }

  render = () => { 
    const me = this
    return (
      <div className='commentslist-wrapper'>
        <span className='postlist-header'>
          <h2>COMMENTS ({this.props.allCommentsOnSelectedPost.length}): </h2>
          <span className='reOrder-button'>
            <label>Sort By: </label>
            <button className='button order-by-timestamp' onClick={() => this.props.orderBy(TIMESTAMP)}>Timestamp</button>
            <button className='button order-by-votes' onClick={() => this.props.orderBy(VOTES)}>Votes</button>
          </span>
        </span>
        <table className='commentslist-table'>
          <tbody>
          {
            this.props.allCommentsOnSelectedPost.filter(function(comment, index) {
              return (!comment.deleted)
            }).map(function(comment, index) {
              return (
                <tr key={index}>
                  <td style={{width:'300px'}}>
                    <p>Name: <b>{comment.author}</b></p>
                    <p>On: <b>{(new Date(comment.timestamp)).toUTCString()}</b></p>
                    <span className='comment-vote-widget'>
                      <p>Votes: </p>
                      <button className='decrement-votes' onClick={() => me.props.decrement(comment.id)}>-</button> 
                      <p className='score-votes'><b>{comment.voteScore}</b></p>
                      <button className='increment-votes' onClick={() => me.props.increment(comment.id)}>+</button>
                    </span>
                  </td>
                  <td>
                    <p>{comment.body}</p>
                  </td>
                  <td style={{width:'100px'}}>
                    <button className='edit-comment' onClick={(event) => me.handleEdit(comment.id, event)}>Edit</button>
                    <button className='delete-comment' onClick={(event) => me.handleDelete(comment.id, event)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>

        <div className='add-comment'>
          <h3>Add A Comment</h3>
          <form className='comment-form' onSubmit={this.handleCreate}>
            <fieldset className="form-group">
              <label>Author: </label>
              <input type='text' name='author' value={this.props.formComment.author} onChange={this.handleAuthor}/>
            </fieldset>
            
            <fieldset className='form-group'>
              <label>Content: </label>
              <input type='text' name='body' value={this.props.formComment.body} onChange={this.handleBody}/>
            </fieldset>

            <input type='submit' value='Submit' />
          </form>
        </div>

      </div>
    )
  }

}

CommentList.propTypes = {
  allCommentsOnSelectedPost: PropTypes.array.isRequired,
  sortCommentsBy: PropTypes.string.isRequired,
  formComment: PropTypes.object.isRequired,
  selectedPost: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
  allCommentsOnSelectedPost: state.allCommentsOnSelectedPost,
  sortCommentsBy: state.sortCommentsBy,
  formComment: state.formComment,
  selectedPost: state.selectedPost
})

const mapDispatchToProps = (dispatch) => {
  function generateUUID () { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  return {
    orderBy: (value) => dispatch(sortCommentsBy(value)),
    increment: (commentId) => vote(commentId, UPVOTE).then( data => dispatch(incrementVote(data)) ),
    decrement: (commentId) => vote(commentId, DOWNVOTE).then( data => dispatch(decrementVote(data)) ),
    saveFormComment: (comment) => dispatch(recieveFormComment(comment)),
    newComment: (comment) => create(generateUUID(), Date.now(), comment.body, comment.author, comment.postId)
      .then(data => dispatch(recieveCreatedComment(data))),
    deleteComment: (commentId) => remove(commentId).then(data => dispatch(recieveDeletedComment(commentId)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
