 import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from './logo_harrogate.svg';
import { FaBarsStaggered } from 'react-icons/fa6';
import ContactUs from '../../pages/ContactUs'
const Navbar = () => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        // setShow(true); 
        if (window.pageYOffset == 0) {setShow(true)} 
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    
    <div className={`normal-nav ${show && 'reverse-nav'}`} id="topNav">
    
      <Link to="/">
<div className="logo-lockup">
        <img className="logo-image" src={ logo }/>
        <p className="logo-title">Harrogate Interactive<br/>Digital creative agency</p>
        </div>
        </Link>

        <div className="nav-links" id="navLinks">
        <a href="javascript:void(0);" class="hamburgerIcon" onClick={function myFunction() {
  var x = document.getElementById("navLinks");
  var y = document.getElementsByClassName('nav-link');
        for(let z = 0; z < y.length; z++) {y[z].addEventListener('click',()=>{  x.classList.remove('responsive');
        x.className = "nav-links";})}
  if (x.className === "nav-links") {
   x.classList.remove('nav-links')
    x.className = "responsive";
  } else {
    x.classList.remove('responsive');
    x.className = "nav-links";
  }
}}>
    <FaBarsStaggered className="bars"/></a>
            <a className="nav-link"><Link to='/'>Home</Link></a>
            <a className="nav-link"><Link to='/about'>About</Link></a>
            <a className="nav-link"><Link to='/posts'>Posts</Link></a>
            <a className="nav-link nav-feature"><Link to="/contact">Contact</Link></a>
           
   </div>
   </div>
 
  )
}

export default Navbar