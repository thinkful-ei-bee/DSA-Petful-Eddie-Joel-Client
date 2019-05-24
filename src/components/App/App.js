import React from 'react';
import {Route} from 'react-router-dom';

import LandingPage from '../../routes/LandingPage';
import Dashboard from '../../routes/Dashboard';
import './App.css';
import Header from '../Header/Header';
class App extends React.Component {

  render(){
    
        
    return (
      <>
        <Header />
        <Route 
          exact path='/'
          component ={LandingPage}
        />
        <Route
          exact path='/dashboard'
          component ={Dashboard}
        />
        
      </>
    )
  }
}

export default App;