import React, {Component} from 'react'
import {connect} from 'react-redux'
import PostView from './postView'

import {recieveSelectedPost} from './action'
import {show as getPost} from '../../services/postsAPI'

class Post extends Component {

  componentDidMount = () => {
    this.props.fetchPost( this.props.match.params.id )
  }

  render = () => <PostView />

}

const mapStateToProps = (state, props) => (
  {
    selectedPost: state.selectedPost
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    fetchPost: (postId) => getPost(postId).then( post => dispatch(recieveSelectedPost(post)) )
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Post)