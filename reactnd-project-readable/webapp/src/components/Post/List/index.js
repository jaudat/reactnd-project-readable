import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {sortPostsBy, TIMESTAMP, VOTES} from './action'
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
            this.props.posts.map(function(post, index) {
              return (
                <tr key={index}>
                  <td>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                  </td>
                  <td>{ (new Date(post.timestamp)).toUTCString() }</td>
                  <td>{post.voteScore}</td>
                </tr>
              )
            })
          }
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
  orderBy: (value) => dispatch(sortPostsBy(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)