import React, {Component} from 'react'
import {connect} from 'react-redux'
import MainView from './mainView'
import {recieveAllCategories, recieveAllPosts} from './action'
import {list as listCategories} from '../../services/categoriesAPI'
import {list as listPosts} from '../../services/postsAPI'

class Main extends Component {
  componentDidMount = () => {
    this.props.fetchPosts();
    this.props.fetchCategories();
    
  }

  render = () => {
    return <MainView categories={this.props.categories} posts={this.props.posts} />
  }
}

const mapStateToProps = (state, props) => {

  return {
    categories: state.categories,
    posts: state.posts
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => listCategories().then(categories => dispatch( recieveAllCategories(categories) )),
    fetchPosts: () => listPosts().then(posts => dispatch( recieveAllPosts(posts) ))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)