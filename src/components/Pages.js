import React from 'react';
import {useParams, BrowserRouter as Router, Routes, Route, withRouter} from 'react-router-dom';
import Posts from './pages/Posts';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import About from './pages/About';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
// import Single from './pages/Single'
import BlogPost from './pages/BlogPost';
import ScrollToTop from './common/ScrollToTop';

const Pages = () => {
    return (

        <>
        <Navbar/>
     
           <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/:slug" element={<BlogPost/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
   
      </Routes>
  
<Footer/>
        </>
    )
}

export default Pages; 