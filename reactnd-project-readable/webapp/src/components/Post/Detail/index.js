import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {incrementVote, decrementVote, UPVOTE, DOWNVOTE} from '../List/action'
import {vote} from '../../../services/postsAPI'
import './style.css'

const Detail = ({selectedPost, decrement, increment}) => {
  const date = new Date(selectedPost.timestamp)

  return (
    <div className='post-details'> 
      <div className='post-buttons'>
        <span className='filler'></span>
        <Link className='edit-post' to={`/${selectedPost.category}/${selectedPost.id}/edit`}>Edit Post</Link>
        <button className='delete-post'>Delete Post</button>
      </div>
      <span className='post-header'>
        <span className='post-vote-widget'>
          <button className='decrement-votes' onClick={() => decrement(selectedPost.id)}>-</button> 
          <p className='post-vote'>{selectedPost.voteScore}</p>
          <button className='increment-votes' onClick={() => increment(selectedPost.id)}>+</button>
        </span>
        <h1 className='post-title'>{selectedPost.title}</h1>
      </span>
      <span className='about-row'> 
        <h3 className='post-author'>by {selectedPost.author}</h3>
        <h3 className='post-timestamp'>on {date.toUTCString()}</h3>
      </span>
      <p className='post-body'>{selectedPost.body}</p>
    </div>
  )
}

Detail.propTypes = {
  selectedPost: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
  selectedPost: state.selectedPost
})

const mapDispatchToProps = (dispatch) => ({
  increment: (postId) => vote(postId, UPVOTE).then( data => dispatch(incrementVote(data)) ),
  decrement: (postId) => vote(postId, DOWNVOTE).then( data => dispatch(decrementVote(data)) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)