import React, { useState } from 'react';
import { useEffect } from 'react';
import PostDetails from '../PostDetails/PostDetails';
import "./Post.css"


const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div className="post-style">
           <h3>News Feed</h3> 
           {
               posts.map(post => <PostDetails key={post.id} post = {post}></PostDetails>)
           }
        </div>
    );
};

export default Posts;