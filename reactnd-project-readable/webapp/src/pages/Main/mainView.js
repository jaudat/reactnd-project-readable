import React from 'react'
import PropTypes from 'prop-types'
import SuperList from '../../components/SuperList/'
import './style.css'


const MainView = ({posts, categories}) => {
  return (
    <div className='grid'>
      <SuperList elements={categories} title="Categories"/>
      <SuperList elements={posts} title="Posts"/>
    </div>
  )
}

MainView.propTypes = {
  posts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
}

export default MainView