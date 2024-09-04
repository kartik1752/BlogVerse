// src/Components/FetchBlog.jsx
import { useEffect, useState } from 'react';

const FetchBlog = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the message from the backend
    fetch('http://localhost:3000/blog')
      .then((response) => response.text()) // Use response.text() since the backend sends plain text
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error fetching message:', error));
  }, []);

  return (
    <div>
      <h1>Message from Backend:</h1>
      <p>{message || 'Loading...'}</p>
    </div>
  );
};

export default FetchBlog;
