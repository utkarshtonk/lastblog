import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the backend API
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="home">
      <h1>Blog Posts</h1>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-preview">
            <Link to={`/post/${post.id}`} className="post-link">
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <div className="read-more">Read More</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;