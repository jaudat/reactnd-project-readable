import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Detail = ({selectedPost}) => {
  return (
    <div className='details'> 
      <h1>{selectedPost.title}</h1>
      <p>{selectedPost.body}</p>
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