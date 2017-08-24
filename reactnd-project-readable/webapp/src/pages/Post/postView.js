import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

import Detail from '../../components/Post/Detail'

const PostView = () => {
  return (
    <div className='post-wrapper'>
      <Detail />
    </div>
  )
}

export default PostView