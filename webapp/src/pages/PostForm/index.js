import React, {Component} from 'react'
import {connect} from 'react-redux'
import {recieveFormPost} from './action'

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

    this.props.saveFormPost(initialFormData)
  }

  
  render = () => <View />

}

const mapStateToProps = (state, props) => {
  return {
    formPost: state.formPost,
    selectedPost: state.selectedPost
  }
}

const mapDispatchToProps = (dispatch) => {
  
    return {
      saveFormPost: (post) => dispatch(recieveFormPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
