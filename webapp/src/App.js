import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Main from './pages/Main'
import Post from './pages/Post'
import PostForm from './pages/PostForm'
import NotFound from './pages/NotFound'


class App extends Component {
  render() {
    return (
    <div className='container'>
      <Header />

      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/post/new' component={PostForm}/>
        <Route path='/:category/:post_id/edit' component={PostForm}/>
        <Route path='/:category/:post_id' component={Post} />
        <Route path='/:category' component={Main} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
    );
  }
}

export default App;
