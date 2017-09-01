import React, {Component} from 'react'
import {connect} from 'react-redux'
import PostView from './postView'

import {recieveSelectedPost, recieveAllCommentOnSelectedPost} from './action'
import {show as getPost} from '../../services/postsAPI'
import {list as getAllComments} from '../../services/commentsAPI'

class Post extends Component {

  componentDidMount = () => {
    this.props.fetchPost( this.props.match.params.post_id )
    this.props.fetchAllCommentsOnPost( this.props.match.params.post_id )
  }

  render = () => <PostView />

}

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => (
  {
    fetchPost: (postId) => getPost(postId).then( post => dispatch(recieveSelectedPost(post)) ),
    fetchAllCommentsOnPost: (postId) => getAllComments(postId).then( comments => dispatch(recieveAllCommentOnSelectedPost(comments)) )
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Post)