import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SideBar extends Component {
  render() {
   return(
    <div className='links'>
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/skills">My Skills</Link>
    </div>
   )
  }
}

export default SideBar; // Don’t forget to use