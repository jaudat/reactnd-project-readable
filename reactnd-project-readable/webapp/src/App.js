import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom'

import Header from './components/Header'
import Main from './pages/Main';
import Post from './pages/Post';

class App extends Component {
  render() {
    return (
    <div className='container'>
      <Header />
 
      <Route exact path='/' component={Main} /> 
      <Route path='/category/:path' component={Main} />
      <Route path='/post/:id' component={Post} />

    </div>
    );
  }
}

export default App;
