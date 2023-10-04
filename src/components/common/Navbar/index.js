import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import logo from './logo.png'

const Navbar = () => {
  return (
    <div id="navbar">
        <img id="logo_image" src={ logo }/>
        <div>
        
            <button><Link to='/'>Home</Link></button>
            <button><Link to='/posts'>Posts</Link></button>
   </div>
   </div>
  )
}

export default Navbar