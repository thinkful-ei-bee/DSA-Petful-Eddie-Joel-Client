import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component{
  render(){
    return(
      <header>
          <h1>
            <Link 
              to='/'>
            Welcome to Petful
            </Link></h1>
        </header>
    )
  }
}

