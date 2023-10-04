import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';



function BlogPost() {
  const { slug } = useParams();
  console.log("Slug:", slug);
  let url =  `${process.env.REACT_APP_API_ROOT}/posts?slug=${slug}`;
  console.log('URL:', url)
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch blog post data using the slug from the URL
    axios.get(url)
      .then((response) => {
        console.log("API Response:", response.data);
        const postData = response.data[0]; 
        setPost(postData); // Set the blog post data in your state
      })
      .catch((error) => {
        console.error(error);
      });
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  // Render your blog post content here
  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

export default BlogPost;