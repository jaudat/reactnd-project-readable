import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './style.css'

const CategoryList = ({categories}) => (
<div className='categorylist-wrapper'>
      <h3>Categories</h3>
      <ol className='categorylist'>
        {
          categories.map(function(category, index) {
            return (
              <li key={index}>
                <Link to={`/${category.path}`}>{category.name}</Link>
              </li>
            )
          })
        }
      </ol>
    </div>
)

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired
}

const mapStateToProps = (state, props) => ({
  categories: state.categories,
})

export default connect(mapStateToProps)(CategoryList)