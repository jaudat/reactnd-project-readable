import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {sortCommentsBy, TIMESTAMP, VOTES} from './action'
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

  render = () => (
    <div className='commentslist-wrapper'>
      <span className='postlist-header'>
        <h2>COMMENTS: </h2>
        <span className='reOrder-button'>
          <label>Sort By: </label>
          <button className='button order-by-timestamp' onClick={() => this.props.orderBy(TIMESTAMP)}>Timestamp</button>
          <button className='button order-by-votes' onClick={() => this.props.orderBy(VOTES)}>Votes</button>
        </span>
      </span>
      <table className='commentslist-table'>
        <tbody>
        {
          this.props.allCommentsOnSelectedPost.map(function(comment, index) {
            return (
              <tr key={index}>
                <td style={{width:'300px'}}>
                <p>Name: <b>{comment.author}</b></p>
                <p>On: <b>{(new Date(comment.timestamp)).toUTCString()}</b></p>
                <p>Votes: <b>{comment.voteScore}</b></p>
                </td>
                <td>
                  <p>{comment.body}</p>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )

}

CommentList.propTypes = {
  allCommentsOnSelectedPost: PropTypes.array.isRequired,
  sortCommentsBy: PropTypes.string.isRequired
}

const mapStateToProps = (state, props) => ({
  allCommentsOnSelectedPost: state.allCommentsOnSelectedPost,
  sortCommentsBy: state.sortCommentsBy
})

const mapDispatchToProps = (dispatch) => ({
  orderBy: (value) => dispatch(sortCommentsBy(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
