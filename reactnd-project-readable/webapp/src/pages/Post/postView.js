import React from 'react'
import './style.css'

import Detail from '../../components/Post/Detail'
import CommentList from '../../components/Comment/List'


const PostView = () => {
  return (
    <div className='post-wrapper'>
      <Detail />
      <CommentList />
    </div>
  )
}

export default PostView