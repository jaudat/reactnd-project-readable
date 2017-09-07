import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'

import {sortPostsBy, TIMESTAMP, VOTES, incrementVote, decrementVote, UPVOTE, DOWNVOTE} from './action'
import {vote} from '../../../services/postsAPI'
import './style.css'

class PostList extends Component {

  render = () => {
    const me = this
    return (
      <div className='postlist-wrapper'>
        <span className='postlist-header'>
          <h3>Posts</h3>
          <span className='reOrder-button'>
            <label>Sort By: </label>
            <button className='button order-by-timestamp' disabled={(this.props.sortPostsBy===TIMESTAMP) ? true : false} onClick={() => this.props.orderBy(TIMESTAMP)}>Timestamp</button>
            <button className='button order-by-votes' disabled={(this.props.sortPostsBy===VOTES) ? true : false} onClick={() => this.props.orderBy(VOTES)}>Votes</button>
          </span>
        </span>
        <table className='postlist-table'>
          <thead>
            <tr>
              <th>Title</th>
              <th># of Comments</th>
              <th>Timestamp</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.posts.filter( 
                (post, index) => (!post.deleted) 
              ).sort(
                sortBy(this.props.sortPostsBy)
              ).map(function(post, index) {
                return (
                  <tr key={index}>
                    <td>
                      <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
                    </td>
                    <td>
                      <p>{post.numberOfComments}</p>
                    </td>
                    <td>{ (new Date(post.timestamp)).toUTCString() }</td>
                    <td>
                      <button className='decrement-votes' onClick={() => me.props.decrement(post)}>-</button> 
                      {' ' + post.voteScore + ' '}
                      <button className='increment-votes' onClick={() => me.props.increment(post)}>+</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className='post-new'>
          <Link to='/post/new'>Create New Post</Link>
        </div>
      </div>
    )
  }

}


PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  sortPostsBy: PropTypes.string.isRequired
}

/**
 * 
 * @param {*} state 
 * @param {*} props 
 */
const mapStateToProps = ({posts, sortPostsBy}, props) => ({
  posts, sortPostsBy
})

const mapDispatchToProps = (dispatch) => ({
  orderBy: (value) => dispatch(sortPostsBy(value)),
  increment: (post) => vote(post.id, UPVOTE).then( data => dispatch(incrementVote({...data, numberOfComments: post.numberOfComments})) ),
  decrement: (post) => vote(post.id, DOWNVOTE).then( data => dispatch(decrementVote({...data, numberOfComments: post.numberOfComments})) )
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)