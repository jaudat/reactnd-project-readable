import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {incrementVote, decrementVote, UPVOTE, DOWNVOTE} from '../List/action'
// import {deletePost} from './action'
import {vote, remove} from '../../../services/postsAPI'
import './style.css'

class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = {redirect: false}
  }
  render = () => {

    if (this.state.redirect) return <Redirect to='/' />

    const selectedPost = this.props.selectedPost
    const date = new Date(selectedPost.timestamp)
    return (
      <div className='post-details'> 
        <div className='post-buttons'>
          <span className='filler'></span>
          <Link className='edit-post' to={`/${selectedPost.category}/${selectedPost.id}/edit`}>Edit Post</Link>
          <button className='delete-post' onClick={(event) => {
            const me = this
            remove(selectedPost.id)
            me.setState({redirect: true})
            }}>Delete Post</button>
        </div>
        <span className='post-header'>
          <span className='post-vote-widget'>
            <button className='decrement-votes' onClick={(event) => this.props.decrement(selectedPost.id)}>-</button> 
            <p className='post-vote'>{selectedPost.voteScore}</p>
            <button className='increment-votes' onClick={(event) => this.props.increment(selectedPost.id)}>+</button>
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
}

Detail.propTypes = {
  selectedPost: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
  selectedPost: state.selectedPost
})

const mapDispatchToProps = (dispatch) => ({
  increment: (postId) => vote(postId, UPVOTE).then( data => dispatch(incrementVote(data)) ),
  decrement: (postId) => vote(postId, DOWNVOTE).then( data => dispatch(decrementVote(data)) ),
  // delete: (postId) => remove(postId).then( data => dispatch(deletePost(postId)) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)