import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {sortPostsBy, TIMESTAMP, VOTES, incrementVote, decrementVote, UPVOTE, DOWNVOTE} from './action'
import {vote} from '../../../services/postsAPI'
import './style.css'

class PostList extends Component {

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.sortPostsBy !== this.props.sortPostsBy) {
      (nextProps.sortPostsBy === TIMESTAMP) ? this.orderByTimestamp() : this.orderByVotes()
    }

  }

  orderByTimestamp() {
    this.props.posts.sort((a, b) => (a.timestamp >= b.timestamp) ? -1 : 1 )
  }

  orderByVotes() {
    this.props.posts.sort((a, b) => (a.voteScore >= b.voteScore) ? -1 : 1 )
  }

  render = () => {
    const me = this
    return (
      <div className='postlist-wrapper'>
        <span className='postlist-header'>
          <h3>Posts</h3>
          <span className='reOrder-button'>
            <label>Sort By: </label>
            <button className='button order-by-timestamp' onClick={() => this.props.orderBy(TIMESTAMP)}>Timestamp</button>
            <button className='button order-by-votes' onClick={() => this.props.orderBy(VOTES)}>Votes</button>
          </span>
        </span>
        <table className='postlist-table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Timestamp</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.posts.filter( (post, index) => (!post.deleted) ).map(function(post, index) {
                return (
                  <tr key={index}>
                    <td>
                      <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
                    </td>
                    <td>{ (new Date(post.timestamp)).toUTCString() }</td>
                    <td>
                      <button className='decrement-votes' onClick={() => me.props.decrement(post.id)}>-</button> 
                      {' ' + post.voteScore + ' '}
                      <button className='increment-votes' onClick={() => me.props.increment(post.id)}>+</button>
                    </td>
                  </tr>
                )
              })
            }
            <tr>
              <td></td>
              <td className='post-new'><Link to='/post/new'>Create New Post</Link></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}


PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  sortPostsBy: PropTypes.string.isRequired
}

const mapStateToProps = (state, props) => ({
  posts: state.posts,
  sortPostsBy: state.sortPostsBy
})

const mapDispatchToProps = (dispatch) => ({
  orderBy: (value) => dispatch(sortPostsBy(value)),
  increment: (postId) => vote(postId, UPVOTE).then( data => dispatch(incrementVote(data)) ),
  decrement: (postId) => vote(postId, DOWNVOTE).then( data => dispatch(decrementVote(data)) )
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)