import React, {Component} from 'react'
import {connect} from 'react-redux'
import MainView from './mainView'

import {recieveAllCategories, recieveAllPosts} from './action'
import {list as listCategories} from '../../services/categoriesAPI'
import {list as listPosts, getAllFromCategory as listPostsInCategory} from '../../services/postsAPI'

class Main extends Component {
  
  componentDidMount = () => {
    this.props.fetchCategories()
    
    if (this.props.match.params.path) {
      this.props.fetchPostsInCategory(this.props.match.params.path)
    } else {
      this.props.fetchPosts()
    }
     
  } //end componentDidMount

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.match.params.path !== this.props.match.params.path) 
      nextProps.fetchPostsInCategory(nextProps.match.params.path)
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
    fetchPosts: () => listPosts().then( posts => dispatch(recieveAllPosts(posts)) ),
    fetchPostsInCategory: (categoryPath) => listPostsInCategory(categoryPath).then( posts => dispatch(recieveAllPosts(posts)) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)