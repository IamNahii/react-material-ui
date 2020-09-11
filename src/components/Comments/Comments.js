import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CommentsDetails from '../CommentsDetails/CommentsDetails';
import './Comments.css';


const Comments = () => {
    let {postId} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then( res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div className="comments-style">
            <div className="post-body">
                <h1>{post.title}</h1>
                <h4>{post.body}</h4>
            </div>
            <h3>Comments are below</h3>
            <div>
                {
                    comments.map(comment => <CommentsDetails key={comment.id} comment={comment}></CommentsDetails>)
                }
            </div>
        </div>
    );
};

export default Comments;