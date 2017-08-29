import React from 'react'
import CategoryList from '../../components/Category/List'
import PostList from '../../components/Post/List'
import './style.css'


const MainView = () => {
  return (
    <div className='grid'>
      <CategoryList />
      <PostList/>
    </div>
  )
}
export default MainView