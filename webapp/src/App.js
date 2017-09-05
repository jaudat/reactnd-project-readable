import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Main from './pages/Main';
import Post from './pages/Post';
import PostForm from './pages/PostForm';


class App extends Component {
  render() {
    return (
    <div className='container'>
      <Header />
 
      <Route exact path='/' component={Main} />
      <Switch>
        <Route exact path='/post/new' component={PostForm}/>
        <Route path='/:category/:post_id/edit' component={PostForm}/>
        <Route path='/:category/:post_id' component={Post} />
        <Route path='/:category' component={Main} />
      </Switch>
    </div>
    );
  }
}

export default App;
