import React from 'react'
import PropTypes from 'prop-types'

const SuperList = ({elements, title}) => {
  const POST = 'post'
  const CATEGORY = 'category'

  if (elements.length === 0) 
    return (
      <h1>Elements Array is empty</h1>
    )

  const type = (elements[0].title) ? POST : CATEGORY
  return (
    <div className='superlist-wrapper'>
      <h3>{title}</h3>
      <ol className='superlist'>
        {
          elements.map(function(element, index) {
            return (
              <li key={index}>
                {(type === POST) ? element.title : element.name }
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

SuperList.propTypes = {
  elements: PropTypes.array.isRequired, 
  title: PropTypes.string.isRequired
}

export default SuperList