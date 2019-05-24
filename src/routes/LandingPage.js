import React from 'react';
import {Link} from 'react-router-dom';


export default class LandingPage extends React.Component{

  render(){
    return(
      <main>
        <img src="https://wishbonepetrescue.org/wp-content/uploads/sites/45/2014/10/Wishbone-Adopt-homepg-2.jpg" alt="Adopt a Pet! Featuring dogs and cats"></img>
        <p>Description of adoption process...</p>
      <Link 
        to='/dashboard'>
        Adoptions in Progress!
      </Link>
      </main>
    )
  }
}