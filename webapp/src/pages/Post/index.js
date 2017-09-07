import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import PostView from './postView'
import NotFound from '../NotFound'
import {recieve404} from '../NotFound/action'
import {recieveSelectedPost, recieveAllCommentOnSelectedPost} from './action'
import {show as getPost} from '../../services/postsAPI'
import {list as getAllComments} from '../../services/commentsAPI'

class Post extends Component {

  componentDidMount = () => {
    this.props.fetchPost( this.props.match.params.post_id )
      .then( () => 
        (this.props.selectedPost && !this.props.selectedPost.id) ? this.props.is404(true) : this.props.is404(false)
      )
    this.props.fetchAllCommentsOnPost( this.props.match.params.post_id )
  }

  render = () => {
    if (this.props.pageNotFound) return <NotFound />
    return <PostView />
  }

}

Post.propTypes = {
  pageNotFound: PropTypes.bool.isRequired,
  selectedPost: PropTypes.object.isRequired
}

/**
 * 
 * @param {*} state 
 * @param {*} props 
 */
const mapStateToProps = ({pageNotFound, selectedPost}, props) => ({
  pageNotFound,
  selectedPost
})

const mapDispatchToProps = (dispatch) => (
  {
    fetchPost: postId => getPost(postId).then( post => dispatch(recieveSelectedPost(post)) ),
    fetchAllCommentsOnPost: postId => getAllComments(postId).then( comments => dispatch(recieveAllCommentOnSelectedPost(comments)) ),
    is404: value => dispatch( recieve404(value) )
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Post)