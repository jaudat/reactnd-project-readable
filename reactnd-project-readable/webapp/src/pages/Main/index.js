import React, {Component} from 'react'
import {connect} from 'react-redux'
import MainView from './mainView'

import {recieveAllCategories, recieveAllPosts} from './action'
import {list as listCategories} from '../../services/categoriesAPI'
import {list as listPosts, getAllFromCategory as listPostsInCategory} from '../../services/postsAPI'
import {list as listComments} from '../../services/commentsAPI'

class Main extends Component {
  
  componentDidMount = () => {
    const me = this
    const getCommentsLengthForPosts = posts => {
      const postsWithCommentLength = []
      posts.filter(function(post, index) {
        return (!post.deleted)
      }).forEach(function(post, index) {

        postsWithCommentLength.push(
          listComments(post.id).then(comments => {
            const commLength = 
              comments.filter(function(comment, index) {
                return (!comment.deleted)
              }).length
              
            return {...post, numberOfComments: commLength}
          })
        )

      })

      Promise.all(postsWithCommentLength).then(posts => me.props.setPosts(posts) )
      

    }


    this.props.fetchCategories()
    
    if (this.props.match.params.category) {
      listPostsInCategory(this.props.match.params.category).then(posts => getCommentsLengthForPosts(posts))
    } else {
      listPosts().then(posts => getCommentsLengthForPosts(posts))
    }
     
  } //end componentDidMount

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.match.params.category !== this.props.match.params.category) 
      nextProps.fetchPostsInCategory(nextProps.match.params.category)
  } //end componentWillReceiveProps

  render = () => <MainView />
}

const mapStateToProps = (state, props) => {

  return {
    categories: state.categories,
    posts: state.posts
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => listCategories().then( categories => dispatch( recieveAllCategories(categories)) ),
    // fetchPosts: () => listPosts().then( posts => dispatch(recieveAllPosts(posts)) ),
    setPosts: posts => dispatch(recieveAllPosts(posts)),
    // fetchPostsInCategory: categoryPath => listPostsInCategory(categoryPath).then( posts => dispatch(recieveAllPosts(posts)) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)