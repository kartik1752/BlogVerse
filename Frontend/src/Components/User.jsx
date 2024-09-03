import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { username } = useParams(); // Access the username from URL parameters

  return (
    <div>
      <h1>Welcome to the user page</h1>
      {username && <h2>Hello, {username}!</h2>}
    </div>
  );
}

export default User;