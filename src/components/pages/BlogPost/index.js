import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import PageNotFound from '../NotFound'

function BlogPost() {
  const { slug } = useParams();
  const url = `${process.env.REACT_APP_API_ROOT}/posts?slug=${slug}`;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    axios.get(url)
      .then((response) => {
        const postData = response.data[0];
        setPost(postData);
        if (response.data.length === 0) {
          console.log('No post found with the specified slug');
          navigate('/404');
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>
      <PageNotFound/>

    </div>;
  }

  // Check if post.title is defined before accessing it
  const postTitle = post.title ? post.title.rendered : 'Untitled';

  return (
    <>
      <div className="blog-post-spacer">
        <h1>HARROGATE INTERACTIVE | DIGITAL CREATIVITY HANDMADE IN HARROGATE</h1>
      </div>
      <div className="blog-post-container">
        <h1>{postTitle}</h1>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </>
  );
}

export default BlogPost;