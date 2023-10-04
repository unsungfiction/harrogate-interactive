import React from 'react';
import {useParams, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Posts from './pages/Posts';
import Home from './pages/Home';
import Navbar from './common/Navbar'
// import Single from './pages/Single'
import BlogPost from './pages/BlogPost'
const Pages = () => {
    return (

        <>
        <Navbar/>
           <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/:slug" element={<BlogPost/>}/>
      </Routes>

        </>
    )
}

export default Pages; 