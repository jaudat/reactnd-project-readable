import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './style.css'

const CommentList = ({allCommentsOnSelectedPost}) => (
  <div className='comments-list'>
  <h2>COMMENTS: </h2>
  <ol>
    {
      allCommentsOnSelectedPost.map(function(comment, index) {
        return (
          <li key={index}>
            <p>{comment.body}</p>
            <p>by {comment.author}</p>
          </li>
        )
      })
    }
  </ol>
</div>
)

CommentList.propTypes = {
  allCommentsOnSelectedPost: PropTypes.array.isRequired
}

const mapStateToProps = (state, props) => ({
  allCommentsOnSelectedPost: state.allCommentsOnSelectedPost
})

export default connect(mapStateToProps)(CommentList)
