import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/components.css';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch post details from the backend API
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/posts/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div className="post-details">
      {post ? (
        <>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-content">{post.content}</div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetails;