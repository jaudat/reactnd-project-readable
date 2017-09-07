import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {categoriesReducer, postsReducer} from './pages/Main/reducer'
import {selectedPostReducer, allCommentsOnSelectedPostReducer} from './pages/Post/reducer'
import {sortPostsReducer} from './components/Post/List/reducer'
import {postDetailRedirectReducer} from './components/Post/Detail/reducer'
import {sortCommentsReducer, formCommentReducer, editingCommentReducer} from './components/Comment/List/reducer'
import {formPostReducer, postFormRedirectReducer} from './pages/PostForm/reducer'
import {pageNotFoundReducer} from './pages/NotFound/reducer'

const rootReducer = combineReducers({
  categories: categoriesReducer,
  posts: postsReducer,
  selectedPost: selectedPostReducer,
  allCommentsOnSelectedPost: allCommentsOnSelectedPostReducer,
  sortPostsBy: sortPostsReducer,
  sortCommentsBy: sortCommentsReducer,
  formPost: formPostReducer,
  formComment: formCommentReducer,
  editingComment: editingCommentReducer,
  postDetailRedirect: postDetailRedirectReducer,
  postFormRedirect: postFormRedirectReducer,
  pageNotFound: pageNotFoundReducer
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose
// const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) )  )
const store = createStore( rootReducer, applyMiddleware(thunk)  )

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
// registerServiceWorker();
