import React, { useState } from 'react';
import { useEffect } from 'react';
import PostDetails from '../PostDetails/PostDetails';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
           <h3>Number of posts: {posts.length}</h3> 
           {
               posts.map(post => <PostDetails post = {post}></PostDetails>)
           }
        </div>
    );
};

export default Posts;