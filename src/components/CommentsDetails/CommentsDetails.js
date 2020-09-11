import React from 'react';
import "./CommentsDetails.css"

const CommentsDetails = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div  className="comment-body">
            <h5>Name: {name}</h5>
            <h6>Email: {email}</h6>
            <p>{body}</p> 
        </div>
    );
};

export default CommentsDetails;