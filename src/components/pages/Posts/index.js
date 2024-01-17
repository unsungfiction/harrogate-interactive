import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import FadeInSection from '../../common/FadeInSection';
import Lion from "./lion.jpg";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/posts`;

    axios.get(url).then((res) => {
      setPosts(res.data);
      setLoading(false); // Set loading to false once posts are fetched
      console.log(res.data);

      if (res.data.length === 0) {
        // Handle the case where no post is found with the given slug
        console.log('No posts found');
      }
    });
  }, []);

  return (
    <>
      <div id="posts-body">
        <div className="fullscreen">
          <div className="letterbox" id="letterBox">
            <div className="sheep-container">
              <img className="sheep" src={Lion} />
            </div>
            <div className="hero-text">
              <h1 className="large-feature-text">
                The fresh scent of <span className="standout-block">ideas</span>
              </h1>
            </div>
          </div>
        </div>

        <h1 id="posts-header">Posts</h1>

        <div className="blog-card-container">
          {loading ? (
            'Loading...'
          ) : (
            Object.keys(posts).length &&
            posts.map((post) => (
              <div key={post.id} className="blog-card">
                <Link to={`/${post.slug}`}>
                  <img src={post.featured_src} className="blog-card-image" />
                  <h2 className="post-headline">{post.title.rendered}</h2>
                  <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className="post-excerpt"></p>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Posts;