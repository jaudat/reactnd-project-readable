import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom'

import Header from './components/Header'
import Main from './pages/Main';

class App extends Component {
  render() {
    return (
    <div className='container'>
      <Header />
 
      <Route exact path='/' component={Main} /> 
      {/* <Route path='/deals' component={} /> */}
      {/* <Route path='/deal' component={} /> */}

    </div>
    );
  }
}

export default App;
