import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Post = () => {
    const [post, setPost] = useState({});
    
    
    const { postId } = useParams();
    console.log(postId);



    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${postId}`
                );
                if (!response.ok) {
                    throw new Error("Failed fetch");
                }
                const data = await response.json();
                setPost(data);
            } catch (e) {
                console.error(e.message);
            };


        }
        getPost();
    }, [postId]);

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default Post