import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './style.css'

const Detail = ({selectedPost}) => {
  var date = new Date(selectedPost.timestamp)
  return (
    <div className='post-details'> 
      <span className='post-header'>
        <p className='post-vote'>{selectedPost.voteScore}</p>
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

export default connect(mapStateToProps)(Detail)