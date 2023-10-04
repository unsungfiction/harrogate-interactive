import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import './index.css'

const Posts = () => {
 
    const [posts, setPosts] = useState([]); 
     useEffect(() => {
let url =  `${process.env.REACT_APP_API_ROOT}/posts`;
// let url = 'http://server.test/wp-json/wp/v2/posts';
axios.get(url).then((res) => {

    setPosts(res.data);
    console.log(res.data)

});
}, []);
    return (
        <>
     <h1>Posts</h1>
           <div className="blog-card-container">
         
        {
         
         Object.keys(posts).length ? posts.map((post)=> {
                return (
                <div key={post.id} className="blog-card">

                    <Link to={`/${post.slug}`}>
                    <img src="https://tritonsubs.com/wp-content/uploads/2020/07/Placeholder-16x9-1.jpg" className="blog-card-image"/>
                <h2>{post.title.rendered}</h2>
              
                            
                <p dangerouslySetInnerHTML = {{__html: post.excerpt.rendered}}></p>
                </Link>
                </div>                
                )
            }) :  'Loading...'
       
        }
    </div>
    </> )
}

export default Posts;