
import './App.css';
import TodoForm from './components/TodoForm';

import Home from './Home';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    

    return (  
  <div className='App'>
      <Home/>
      <TodoForm/>

  </div>
    
   
    
    )
  }
}



