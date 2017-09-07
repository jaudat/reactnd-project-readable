import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {recieveFormPost} from './action'
import NotFound from '../NotFound'
import {recieve404} from '../NotFound/action'

import View from './view'

class PostForm extends Component {
  componentDidMount = () => {
    function generateUUID () { // Public Domain/MIT
      var d = new Date().getTime();
      if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
          d += performance.now(); //use high-precision timer if available
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
    }

    const initialFormData = 
      (this.props.match && this.props.match.params.post_id) ? 
        { ...this.props.selectedPost, isNew:false } : 
        { id:generateUUID(), title:'', author:'', body:'', category:'', timestamp:Date.now(), isNew:true } 

    if (!initialFormData.isNew) {
      if (this.props.selectedPost && !this.props.selectedPost.id) {
        this.props.is404(true)
      } else {
        this.props.is404(false)
      }
    } 
    this.props.saveFormPost(initialFormData)
  }

  
  render = () => {
    if (this.props.pageNotFound) return <NotFound />
    return <View />
  }

}

PostForm.propTypes = {
  pageNotFound: PropTypes.bool.isRequired,
  selectedPost: PropTypes.object.isRequired,
  formPost: PropTypes.object.isRequired
}

/**
 * 
 * @param {*} state 
 * @param {*} props 
 */
const mapStateToProps = ({formPost, selectedPost, pageNotFound,}, props) => ({
    formPost,
    selectedPost,
    pageNotFound,
  })

const mapDispatchToProps = (dispatch) => {
  
    return {
      saveFormPost: (post) => dispatch(recieveFormPost(post)),
      is404: value => dispatch( recieve404(value) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
