// Import necessary components and hooks
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import About from './pages/About';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import PageNotFound from './pages/NotFound';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './common/ScrollToTop';

// Pages component
const Pages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        {/* Render BlogPost or NotFound based on the result */}
        <Route path="/:slug" element={<RenderBlogPost />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
       
      </Routes>
      <Footer />
    </>
  );
};

// RenderBlogPost component
const RenderBlogPost = () => {
  // You can check if the post is not found and render a different component
  // or handle the redirection logic here.
  // For simplicity, we're rendering the BlogPost component for now.
  return <BlogPost />;
};

export default Pages;